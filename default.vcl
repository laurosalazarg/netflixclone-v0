#
# This is an example VCL file for Varnish.
#
# It does not do anything by default, delegating control to the
# builtin VCL. The builtin VCL is called when there is no explicit
# return statement.
#
# See the VCL chapters in the Users Guide at https://www.varnish-cache.org/docs/
# and https://www.varnish-cache.org/trac/wiki/VCLExamples for more examples.

# Marker to tell the VCL compiler that this VCL has been adapted to the
# new 4.0 format.
vcl 4.0;



# Default backend definition. Set this to point to your content server.
backend default {
    .host = "9b3511a1e1d1930eb4b037896c0401021451101c.slzr.cloud";
    .port = "80";
}

sub vcl_recv {
    # Happens before we check if we have this in cache already.
    #
    # Typically you clean up the request here, removing cookies you don't need,
    # rewriting the request, etc.
    #
    #
    #
    if (req.restarts > 0) {
    set req.hash_always_miss = true;
  }






  if (req.method == "PURGE") {
 #   if (client.ip !~ purge) {
  #          return (synth(405, "Method Not Allowed"));
   #     }
        set req.hash_always_miss = true;
        return (purge);
    }






  return (hash);
}



sub vcl_backend_response {
    # Happens after we have read the response headers from the backend.
    #
    # Here you clean the response headers, removing silly Set-Cookie headers
    # and other mistakes your backend does.
    #
    #

    # cache everything in /assets folder
    if (bereq.url ~ "/assets" ) { 
        unset beresp.http.set-cookie;
        # cache for 2 days 
        set beresp.http.cache-control = "public, max-age=2880"; 
        set beresp.ttl = 2d; 
        
        return (deliver);
    }

    if (bereq.url ~ "/static") { 
        unset beresp.http.set-cookie;
        # cache for 1 day
        set beresp.http.cache-control = "public, max-age=1440"; 
        set beresp.ttl = 1d; 

        return (deliver);
    }


}

sub vcl_deliver {
    # Happens when we have all the pieces we need, and are about to send the
    # response to the client.
    #
    # You can do accounting or modifying the final object here.
    #

 set resp.http.grace = req.http.grace;

  if (obj.hits > 0) {
    set resp.http.X-Varnish-Cache = "HIT";
  }
  else {
    set resp.http.X-Varnish-Cache = "MISS";
  }

  return (deliver);
}


sub vcl_hit {
    if (obj.ttl >= 0s) {
        return (deliver);
    }
    return (restart);
}

