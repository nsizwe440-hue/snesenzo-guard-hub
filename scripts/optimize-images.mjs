import sharp from "sharp";
import { readdir, stat, unlink, writeFile } from "node:fs/promises";
import path from "node:path";

const SRC = "src/assets";
const SIZES = [400, 800, 1600];
const QUALITY = 78;

const files = await readdir(SRC);
const photos = files.filter((f) => /\.(jpe?g|png)$/i.test(f) && !f.endsWith("-400.webp") && !f.endsWith("-800.webp") && !f.endsWith("-1600.webp"));

// Keep logos as PNG (transparent), skip resizing
const KEEP_AS_IS = new Set(["psira-logo.png", "ssg-logo.png"]);

let savedTotal = 0;
let originalTotal = 0;
const report = [];

for (const file of photos) {
  const full = path.join(SRC, file);
  const original = await stat(full);
  originalTotal += original.size;

  if (KEEP_AS_IS.has(file)) {
    // Re-compress logo PNGs
    const buf = await sharp(full).png({ compressionLevel: 9, quality: 90 }).toBuffer();
    if (buf.length < original.size) {
      await writeFile(full, buf);
    }
    const after = (await stat(full)).size;
    savedTotal += after;
    report.push({ file, before: original.size, after, variants: 0 });
    continue;
  }

  const base = file.replace(/\.(jpe?g|png)$/i, "");
  const meta = await sharp(full).metadata();
  const maxW = meta.width ?? 1600;

  let variants = 0;
  let variantBytes = 0;
  for (const w of SIZES) {
    if (w > maxW * 1.1) continue;
    const out = path.join(SRC, `${base}-${w}.webp`);
    const buf = await sharp(full).resize({ width: w, withoutEnlargement: true }).webp({ quality: QUALITY }).toBuffer();
    await writeFile(out, buf);
    variantBytes += buf.length;
    variants++;
  }
  // Always have a 1600 (or original-size) jpg fallback
  const fallbackW = Math.min(1600, maxW);
  const fallbackOut = path.join(SRC, `${base}-${fallbackW}.jpg`);
  const fallbackBuf = await sharp(full).resize({ width: fallbackW, withoutEnlargement: true }).jpeg({ quality: 80, mozjpeg: true }).toBuffer();
  await writeFile(fallbackOut, fallbackBuf);
  variantBytes += fallbackBuf.length;

  // Delete original (huge) file
  await unlink(full);
  savedTotal += variantBytes;
  report.push({ file, before: original.size, after: variantBytes, variants: variants + 1, fallbackW });
}

const fmt = (n) => `${(n / 1024).toFixed(0)} KB`;
console.log("file | before | after | variants");
for (const r of report) {
  console.log(`${r.file} | ${fmt(r.before)} | ${fmt(r.after)} | ${r.variants}`);
}
console.log(`---\nTOTAL: ${(originalTotal / 1024 / 1024).toFixed(2)} MB → ${(savedTotal / 1024 / 1024).toFixed(2)} MB`);
