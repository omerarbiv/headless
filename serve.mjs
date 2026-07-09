import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';

const ROOT = join(process.cwd(), 'dist');
const PORT = 4599;
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.json': 'application/json' };

createServer(async (req, res) => {
  let path = decodeURIComponent(req.url.split('?')[0]);
  if (path === '/' || path.endsWith('/')) path += 'index.html';
  try {
    const buf = await readFile(join(ROOT, path));
    res.writeHead(200, { 'content-type': TYPES[extname(path)] || 'application/octet-stream' });
    res.end(buf);
  } catch {
    res.writeHead(404, { 'content-type': 'text/plain' });
    res.end('not found');
  }
}).listen(PORT, () => console.log('serving dist on http://localhost:' + PORT));
