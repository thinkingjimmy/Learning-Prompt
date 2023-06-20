import fs from "fs";
import path from "path";

const imagesdir = path.join(process.cwd(), ".gitbook/assets");

const files = fs.readdirSync(imagesdir);

files.forEach((file) => {
  fs.copyFileSync(
    path.join(imagesdir, file),
    path.join(imagesdir, file.replaceAll(" ", ""))
  );
  fs.unlinkSync(path.join(imagesdir, file));
});
