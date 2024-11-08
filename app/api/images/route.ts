import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const folder = searchParams.get("folder");

  if (!folder) {
    return NextResponse.json(
      { error: "Parameter 'folder' is required" },
      { status: 400 }
    );
  }

  const imagesDir = path.join(process.cwd(), "public", folder);

  try {
    const files = await fs.promises.readdir(imagesDir);
    const images = files.map((file, index) => ({
      id: index,
      title: file.split(".")[0],
      src: `/${folder}/${file}`,
    }));

    return NextResponse.json(images);
  } catch (error) {
    return NextResponse.json({ error: "Folder not found" }, { status: 404 });
  }
}
