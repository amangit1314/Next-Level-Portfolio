import { defineField, defineType } from "sanity";

export default defineType({
    name: "experience",
    title: "Experience",
    type: "document",
    fields: [
        defineField({
            name: "role",
            title: "Role",
            type: "string",
        }),
        defineField({
            name: "company",
            title: "Company",
            type: "string",
        }),
        defineField({
            name: "companyLink",
            title: "Company Link",
            type: "url",
        }),
        defineField({
            name: "year",
            title: "Year / Duration",
            type: "string",
            description: "e.g. Aug 2024 - June 2025",
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
    ],
});
