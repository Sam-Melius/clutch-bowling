export default {
  name: "PatchNotes",
  title: "Patch Notes",
  type: "document",
  fields: [
    {
      name: "patchNumber",
      title: "Patch Number",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "notes",
      title: "Notes",
      type: "text",
      validation: (rule) => rule.required(),
    },
    {
      name: "changes",
      title: "Changes",
      type: "object",
      validation: (rule) => rule.required(),
      fields: [
        {
          name: "engineUpdates",
          title: "Engine Updates",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "universalUpdates",
          title: "Universal Updates",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "iosUpdates",
          title: "iOS Updates",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "androidUpdates",
          title: "Android Updates",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "adminPanelUpdates",
          title: "Admin Panel Updates",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "systemReworks",
          title: "System Reworks",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "newEffects",
          title: "New Effects",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "bugFixes",
          title: "Bug Fixes",
          type: "array",
          of: [{ type: "string" }],
        },
      ],
    },
  ],
};
