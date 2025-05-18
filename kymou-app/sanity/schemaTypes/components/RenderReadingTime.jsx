import React, { forwardRef } from "react";
import { Card, Stack, Inline, Badge, Text } from "@sanity/ui";
import { FormField } from "sanity";

export const RenderReadingTime = forwardRef(function RenderReadingTime(props, ref) {
  const { type, value, document } = props;

  const filteredBlock = document?.content
    ?.filter((block) => block._type === "block" && Array.isArray(block.children))
    .flatMap((block) => block.children.map((child) => child.text))
    .join(" ") || "";

  const wordsPerMinute = 150;
  const words = filteredBlock.split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(words / wordsPerMinute);

  return (
    <FormField
      description={type.description}
      title={type.title}
      __unstable_markers={props.markers}
      __unstable_presence={props.presence}
      compareValue={props.compareValue}
    >
      <Card padding={4} shadow={1} radius={2} ref={ref}>
        <Stack space={3}>
          <Inline space={2}>
            <Badge tone="primary">{minutes} min read</Badge>
            <Badge>{words} words</Badge>
          </Inline>
        </Stack>
      </Card>
    </FormField>
  );
});
