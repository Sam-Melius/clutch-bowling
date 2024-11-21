export default {
  name: "faqs",
  title: "FAQs",
  type: "document",
  fields: [
    {
      name: "title",
      title: "All FAQs",
      type: "string",
      hidden: true,
    },
    {
      name: "frequentlyAskedQuestions",
      title: "Frequently Asked Questions",
      type: "array",
      of: [{ type: "questionAndAnswer" }],
      validation: (rule) => rule.required(),
    },
  ],
};
