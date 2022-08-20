import { serve } from "https://deno.land/std@0.152.0/http/server.ts";
import { v4 } from "https://deno.land/std@0.152.0/uuid/mod.ts";

let s = ""
let c = 0

function a(){
    setInterval(()=>{
        c++
        console.log(`${s}:${c}`)
    },1000)
}

serve((req) => {
    if(req.url.search("/favicon.ico")<0){
      a()
      s = crypto.randomUUID();
    }
    return new Response("Hello World\n");
}, {port:8080});