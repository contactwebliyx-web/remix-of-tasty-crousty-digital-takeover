import { removeBackground } from "@imgly/background-removal";

export async function processImage(file: File): Promise<string> {
  const blob = await removeBackground(file, {
    progress: (key, current, total) => {
      console.log(`[BG Removal] ${key}: ${current}/${total}`);
    },
  });
  return URL.createObjectURL(blob);
}
