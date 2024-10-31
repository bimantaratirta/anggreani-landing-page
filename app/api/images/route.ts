import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const imagesDir = path.join(process.cwd(), "public", "sample");

  const files = await fs.promises.readdir(imagesDir);
  const images = files.map((file, index) => ({
    id: index,
    title: file.split(".")[0],
    src: `/sample/${file}`,
  }));

  return NextResponse.json(images);
}
