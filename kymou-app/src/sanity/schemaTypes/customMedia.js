import { defineType } from "sanity";
export default defineType({
    name: "customMedia",
    type: "document",
    title: "Custom Media",
    fields: [
      {
        name: "asset",
        type: "image",
        title: "Image",
        options: {
          storeOriginalFilename: true, // Keeps the original file name
        },
      },
      {
        name: "altText",
        type: "string",
        title: "Alt Text",
        description: "Alternative text for accessibility",
      },
      {
        name: "caption",
        type: "string",
        title: "Caption",
        description: "Short description of the media",
      },
      {
        name: "tags",
        type: "array",
        title: "Tags",
        of: [{ type: "string" }],
      },
      {
        name: "copyright",
        type: "string",
        title: "Copyright Info",
      },
    ],
  })