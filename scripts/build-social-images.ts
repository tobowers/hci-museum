import sharp from "sharp";
import { exhibits } from "../src/data";

const SOCIAL_IMAGE_WIDTH = 1200;
const SOCIAL_IMAGE_HEIGHT = 630;

export async function buildExhibitSocialImages(root: string, outdir: string): Promise<void> {
  await Bun.$`mkdir -p ${outdir}/og/exhibits`;

  for (const exhibit of exhibits) {
    if (!exhibit.image.startsWith("assets/wiki/")) continue;

    await sharp(`${root}${exhibit.image}`, { animated: false })
      .rotate()
      .resize(SOCIAL_IMAGE_WIDTH, SOCIAL_IMAGE_HEIGHT, {
        fit: "cover",
        position: sharp.strategy.attention,
      })
      .jpeg({ quality: 88, mozjpeg: true })
      .toFile(`${outdir}/og/exhibits/${exhibit.slug}.jpg`);
  }
}
