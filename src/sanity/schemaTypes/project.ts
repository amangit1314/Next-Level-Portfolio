import { defineField, defineType } from "sanity";

export default defineType({
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "link",
            title: "Live Link",
            type: "url",
        }),
        defineField({
            name: "code",
            title: "Code Link",
            type: "url",
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
        }),
        defineField({
            name: "technologies",
            title: "Technologies",
            type: "array",
            of: [{ type: "string" }],
        }),
        defineField({
            name: "duration",
            title: "Duration",
            type: "string",
        }),
        defineField({
            name: "role",
            title: "Role",
            type: "string",
        }),
        defineField({
            name: "achievements",
            title: "Achievements",
            type: "array",
            of: [{ type: "string" }],
        }),
        defineField({
            name: "isAI",
            title: "Is AI / Agentic Project?",
            type: "boolean",
            initialValue: false,
        }),
        defineField({
            name: "playgroundUrl",
            title: "Interactive Demo / Playground URL",
            type: "url",
        }),
        defineField({
            name: "architectureDiagram",
            title: "Architecture / Workflow Diagram",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "metrics",
            title: "Performance Metrics",
            type: "array",
            of: [
                {
                    type: "object",
                    title: "Metric Item",
                    fields: [
                        { name: "label", type: "string", title: "Metric Label (e.g. Latency)" },
                        { name: "value", type: "string", title: "Value (e.g. -40% or 120ms)" },
                    ],
                },
            ],
        }),
    ],
});
