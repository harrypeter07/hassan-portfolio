import { JSX } from "react";
import { SliceData } from "@/lib/data";

/**
 * Props for `ImageBlock`.
 */
export type ImageBlockProps = {
  slice: SliceData;
};

/**
 * Component for "ImageBlock" Slices.
 */
const ImageBlock = ({ slice }: ImageBlockProps): JSX.Element => {
  return (
    <img 
      src={slice.primary.image.url} 
      alt="Content image"
      className="w-full max-w-2xl mx-auto"
      width={slice.primary.image.width}
      height={slice.primary.image.height}
    />
  );
};

export default ImageBlock;
