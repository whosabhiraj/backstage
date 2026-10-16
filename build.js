// Copies public/ into every output dir Cloudflare Pages might be pointed at.
const fs = require("fs");

const outDirs = ["dist", "build", "out", "output", ".output/public"];

for (const dir of outDirs) {
  fs.rmSync(dir, { recursive: true, force: true });
  fs.cpSync("public", dir, { recursive: true });
  console.log(`public -> ${dir}`);
}
