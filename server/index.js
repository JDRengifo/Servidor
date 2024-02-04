const http = require("http");
const fs = require("fs");

const students = JSON.stringify([
  { id: 1, name: "Jose" },
  { id: 2, name: "Dario" },
  { id: 3, name: "Rengifo" },
]);

http.createServer((req, res)=>{
  const { url } = req;

  if(url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("Holaaaaa Jose");
  };

  // if(url === "/students") {
  //   res.writeHead(200, { "Content-type": "aplication-json"});
  //   return res.end(
  //     JSON.stringify([
  //       { id: 1, name: "Jose" },
  //       { id: 2, name: "Dario" },
  //       { id: 3, name: "Rengifo" },
  //     ])
  //   );
  // }

  if(url === "/students") {
    res.writeHead(200, { "Content-Type": "aplication-json" });
    return res.end( students);
  };

  if(url === "/html") {
    const html = fs.readFileSync(__dirname+"/src/index.html", "utf-8");
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end(html);
  }

  if(url === "/template"){
    const html = fs.readFileSync(__dirname+"/src/template.html", "utf-8");
    const nombre = "Jose Dario Rengifo Franco"
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end(html.replace("{nombre}",nombre));
  }

  res.writeHead(400);
  res.end()
}).listen(3001, "localhost");