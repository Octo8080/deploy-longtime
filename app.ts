import { serve } from "https://deno.land/std@0.152.0/http/server.ts";

function a(){
    setInterval(()=>{
        console.log(new Date)
    },1000)
}

serve((req) => {
    a()

    return new Response("Hello World\n");
}, {port:8080});