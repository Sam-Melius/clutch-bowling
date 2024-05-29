export default {
  name: "pricing",
  title: "Pricing",
  type: "document",
  fields: [
    {
      name: "tier",
      title: "Tier",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "startingPrice",
      title: "Starting Price",
      type: "number",
      validation: (rule) => rule.required(),
    },
    {
      name: "bulletPoints",
      title: "Bullet Points",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule) => rule.required(),
    },
  ],
};
