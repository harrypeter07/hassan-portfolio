import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Avatar from "./Avatar";
import { JSX } from "react";
import { SliceData } from "@/lib/data";

/**
 * Props for `Biography`.
 */
export type BiographyProps = {
  slice: SliceData;
};

/**
 * Component for "Biography" Slices.
 */
const Biography = ({ slice }: BiographyProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >

      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr , 1fr]">
        <Heading as="h1" size="xl" className="col-start-1">
           {slice.primary.heading}
        </Heading>
          <div className="prose prose-xl prose-slate prose-invert col-start-1">
               {slice.primary.body.map((paragraph: any, index: number) => (
                 <p key={index}>{paragraph.content.text}</p>
               ))}
          </div>
          <Button
          linkField={slice.primary.button_link}
          label={slice.primary.button_text
          }
          />

      <Avatar 
      image={slice.primary.avatar}

     className="row-start-1 max-w-sm md:col-start-2 md:row-end-3 rounded-[12px]"
      />
      </div>
     </Bounded>
  );
};

export default Biography;
