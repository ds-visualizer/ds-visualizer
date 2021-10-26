import * as htmlToImage from "html-to-image";
import imageCompression from "browser-image-compression";

const socialElement = document.querySelector("[data-social]");
const saveElement = document.querySelector("[data-save]");

saveElement.addEventListener("click", () => saveImage(socialElement));

async function saveImage(node) {
  try {
    // create Blob from node
    const imageOptions = { width: 1200, height: 630 };
    const imageBlob = await htmlToImage.toBlob(node, imageOptions);

    // pass Blob and the quality option to be compressed
    const compressionOptions = { initialQuality: 1 };
    const compressedFile = await imageCompression(
      imageBlob,
      compressionOptions
    );

    // create URL from Blob
    const imageUrl = window.URL.createObjectURL(compressedFile);

    // download image
    const linkElement = document.createElement("a");
    linkElement.download = "og-image.png";
    linkElement.href = imageUrl;
    linkElement.click();
  } catch (error) {
    throw new Error(`Something went wrong: ${error}`);
  }
}
