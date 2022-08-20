import { serve } from "https://deno.land/std@0.152.0/http/server.ts";
import { v4 } from "https://deno.land/std@0.152.0/uuid/mod.ts";

let s:string[] = []
let c:{[key:string]:number} = {}

function a(key){
    setInterval(()=>{
        c[key]++
        console.log(`${key}:${c[key]}`)
    },1000)
}

serve((req) => {
    if(req.url.search("/favicon.ico")<0){
      const key = crypto.randomUUID()
      c[key] = 0
      a(key)
    }
    return new Response("Hello World\n");
}, {port:8080});