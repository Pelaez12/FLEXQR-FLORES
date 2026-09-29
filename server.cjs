const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const baseDir = path.resolve(__dirname, 'dist');
if (!fs.existsSync(path.join(baseDir, 'index.html'))) {
  console.error('Primero ejecuta npm run build para preparar Flores & Boutique.');
  process.exit(1);
}
const mimeTypes = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.woff2': 'font/woff2', '.woff': 'font/woff', '.ttf': 'font/ttf' };
const server = http.createServer((req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') { res.writeHead(405, { Allow: 'GET, HEAD' }); res.end(); return; }
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); } catch { res.writeHead(400); res.end(); return; }
  const candidate = path.resolve(baseDir, '.' + pathname);
  if (candidate !== baseDir && !candidate.startsWith(baseDir + path.sep)) { res.writeHead(403); res.end(); return; }
  fs.stat(candidate, (error, stat) => {
    const isFile = !error && stat.isFile();
    const isPage = pathname === '/' || pathname === '/index.html' || pathname === '/flexqr-flores' || pathname.startsWith('/flexqr-flores/');
    if (!isFile && !isPage) { res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }); res.end('No encontrado'); return; }
    const file = isFile ? candidate : path.join(baseDir, 'index.html');
    fs.readFile(file, (readError, contents) => {
      if (readError) { res.writeHead(500); res.end('No se pudo leer el archivo'); return; }
      res.writeHead(200, { 'Content-Type': mimeTypes[path.extname(file)] || 'application/octet-stream', 'X-Content-Type-Options': 'nosniff' });
      res.end(req.method === 'HEAD' ? undefined : contents);
    });
  });
});
const port = Number(process.env.PORT || 8088);
server.listen(port, '127.0.0.1', () => console.log(`Flores & Boutique: http://localhost:${port}/flexqr-flores`));
