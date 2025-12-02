import { defineField, defineType } from "sanity";

export default defineType({
    name: "skill",
    title: "Skill",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Skill Name",
            type: "string",
        }),
        defineField({
            name: "icon",
            title: "Icon",
            type: "image",
            description: "Upload an icon image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "iconName",
            title: "Icon Name (React Icons)",
            type: "string",
            description: "e.g. FaReact (If using react-icons dynamically, though image is preferred for CMS)",
        }),
        defineField({
            name: "color",
            title: "Color Class",
            type: "string",
            description: "Tailwind gradient classes, e.g. from-blue-500 to-cyan-500",
        }),
        defineField({
            name: "category",
            title: "Category",
            type: "string",
            options: {
                list: [
                    { title: "Frontend", value: "Frontend" },
                    { title: "Backend", value: "Backend" },
                    { title: "Mobile", value: "Mobile" },
                    { title: "Database", value: "Database" },
                    { title: "DevOps", value: "DevOps" },
                ],
            },
        }),
        defineField({
            name: "proficiency",
            title: "Proficiency (%)",
            type: "number",
            validation: (Rule) => Rule.min(0).max(100),
        }),
    ],
});
