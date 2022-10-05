export default {
    name: "projects",
    type: "document",
    title: "Projects",
    fields: [
      // Project Title
      {
        title: "Project Title",
        name: "project_title",
        type: "string",
      },
  
      // Project Type
      {
        title: "Project Type",
        name: "project_type",
        type: "string",
      },
  
      // Project Description
      {
        name: "project_desc",
        title: "Project Description",
        type: "array",
        of: [
          {
            type: "block",
            title: "Block",
            styles: [
              { title: "Normal", value: "normal" },
              { title: "H1", value: "h1" },
              { title: "H2", value: "h2" },
              { title: "H3", value: "h3" },
              { title: "H4", value: "h4" },
              { title: "Quote", value: "blockquote" },
            ],
            lists: [
              { title: "Bullet", value: "bullet" },
              { title: "Number", value: "number" },
            ],
  
            marks: {
              decorators: [
                { title: "Strong", value: "strong" },
                { title: "Emphasis", value: "em" },
              ],
              annotations: [
                {
                  name: "link",
                  type: "object",
                  title: "URL",
                  fields: [
                    {
                      title: "URL",
                      name: "href",
                      type: "url",
                    },
                  ],
                },
              ],
            },
          },
        ],
      },
  
      // Project Link
      {
        title: "Project Link",
        name: "project_link",
        type: "string",
      },
    ],
  };
  