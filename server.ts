import { listenAndServe } from "https://deno.land/std@0.61.0/http/server.ts";

const body = "Hello World\n";
const options = { port: 8000 };
listenAndServe(options, (req) => {
  req.respond({ body });
});