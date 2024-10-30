export default {
  name: "laneEffects",
  title: "Lane Effects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      validation: (rule) => rule.required(),
    },
    {
      name: "video",
      title: "Video",
      type: "file", // Change "video" to "file" or "url"
      validation: (rule) => rule.required(),
      options: {
        accept: "video/*" // Optional: restricts to video file types
      },
    },
  ],
};
