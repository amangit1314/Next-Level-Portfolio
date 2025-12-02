import { defineField, defineType } from "sanity";

export const testimonial = defineType({
    name: "testimonial",
    title: "Testimonial",
    type: "document",
    fields: [
        defineField({
            name: "personName",
            title: "Person Name",
            type: "string",
        }),
        defineField({
            name: "personRole",
            title: "Person Role",
            type: "string",
        }),
        defineField({
            name: "personImg",
            title: "Person Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "comment",
            title: "Comment",
            type: "text",
        }),
    ],
});
