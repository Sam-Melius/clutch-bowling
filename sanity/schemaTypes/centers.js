// schemas/bowlingCenter.js

export default {
  name: "centers",
  title: "Centers",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "locationName",
      title: "Location Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "coordinates",
      title: "Coordinates",
      type: "object",
      fields: [
        {
          name: "lat",
          title: "Latitude",
          type: "number",
          validation: (Rule) => Rule.required().min(-90).max(90),
        },
        {
          name: "lng",
          title: "Longitude",
          type: "number",
          validation: (Rule) => Rule.required().min(-180).max(180),
        },
      ],
    },
    {
      name: "url",
      title: "Website URL",
      type: "url",
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ["http", "https"],
        }),
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "includeInTrustedBySection",
      title: "Include in Trusted By Section?",
      type: "boolean",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "facebookUrl",
      title: "Facebook URL",
      type: "url",
    },
    {
      name: "instagramUrl",
      title: "Instagram URL",
      type: "url",
    },
  ],
};
