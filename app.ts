import { serve } from "https://deno.land/std@0.152.0/http/server.ts";
import { v4 } from "https://deno.land/std@0.152.0/uuid/mod.ts";

let counter:{[key:string]:number} = {}

function count(key){
  const p =  setInterval(()=>{
    counter[key]++
    console.log(`${key}:${counter[key]}`)
    if(counter[key]>10000){
        clearInterval(p)
    }
  },1000)
}

serve((req) => {
  if(req.url.search("/favicon.ico")<0){
    const key = crypto.randomUUID()
    counter[key] = 0
    count(key)
  }
  return new Response("Hello World\n");
}, {port:8080});