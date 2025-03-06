import { RichTextBlock } from "./rich-text-block";
import { SpoilerBlock } from "./spoiler-block";
import { TestimonialBlock } from "./testimonial-block";

type TeamPageBlock = SpoilerBlock | TestimonialBlock | RichTextBlock;

const blocks: Record<
  TeamPageBlock["__component"],
  React.ComponentType<{ block: TeamPageBlock }>
> = {
  "block.spoiler": ({ block }: { block: TeamPageBlock }) => (
    <SpoilerBlock block={block as SpoilerBlock} key = {"Spoiler"+block.id}/>
  ),
  "block.testimonial": ({ block }: { block: TeamPageBlock }) => (
    <TestimonialBlock block={block as TestimonialBlock} key = {"Testimonial"+block.id} />
  ),
  "block.richtext": ({ block }: { block: TeamPageBlock }) => (
    <RichTextBlock block={block as RichTextBlock} key = {"RichText"+block.id} />
  ),
};

function BlockRenderer({ block }: { block: TeamPageBlock }) {
  const BlockComponent = blocks[block.__component];
  return BlockComponent ? <BlockComponent block={block} /> : null;
}

export { BlockRenderer };
export type { TeamPageBlock };

