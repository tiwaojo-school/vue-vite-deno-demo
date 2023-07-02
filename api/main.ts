import { Application, Router  } from "https://deno.land/x/oak@v12.5.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import data from "./data.json" assert { type: "json" };

const router= new Router();

router.get("/", (context) => {
    context.response.body = `<!DOCTYPE html>
    <html>
      <head><title>Hello oak!</title><head>
      <body>
        <h1>Hello oak!</h1>
      </body>
    </html>
  `;
})
.get("/api", (context) => {
    context.response.body = data;    
})
// .get("/api/:id", (context) => {
//     if (context.params && context.params.id && data[context.params.id]) {
//         context.response.body = data[context?.params?.id];
//     } else {
//         context.response.status = 404;
//     }
// })
.get("/api/:dinosaur", (context) => { 
    if (context.params && context.params.dinosaur) {
        const filtered = data.filter((dino: { name: string; }) => dino.name.toLowerCase() === context.params.dinosaur?.toLowerCase());
        if (filtered.length > 0) {
            context.response.body = filtered;
        }
    } else {
        context.response.status = 404;
    }
})

const app = new Application();
// app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

console.log("Server running on port 8000");

await app.listen({ port: 8000 });