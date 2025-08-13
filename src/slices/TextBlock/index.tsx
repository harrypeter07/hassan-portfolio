import { JSX } from "react";
import { SliceData } from "@/lib/data";

/**
 * Props for `TextBlock`.
 */
export type TextBlockProps = {
  slice: SliceData;
};

/**
 * Component for "TextBlock" Slices.
 */
const TextBlock = ({ slice }: TextBlockProps): JSX.Element => {
  return (
    <div className="max-w-prose">
      {slice.primary.body.map((paragraph: any, index: number) => (
        <p key={index}>{paragraph.content.text}</p>
      ))}
   </div>
  );
};

export default TextBlock;
