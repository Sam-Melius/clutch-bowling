export default {
  name: "questionAndAnswer",
  title: "Question and Answers",
  type: "object",
  fields: [
    {
      name: "question",
      title: "Question",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "answer",
      title: "Answer",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: "question",
      subtitle: "answer",
    },
  },
};
