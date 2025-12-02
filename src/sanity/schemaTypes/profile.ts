import { defineField, defineType } from "sanity";

export default defineType({
    name: "profile",
    title: "Profile",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
        }),
        defineField({
            name: "role",
            title: "Role",
            type: "string",
        }),
        defineField({
            name: "headline",
            title: "Headline",
            type: "string",
        }),
        defineField({
            name: "shortBio",
            title: "Short Bio (Hero Section)",
            type: "text",
        }),
        defineField({
            name: "longBio",
            title: "Long Bio (About Section)",
            type: "text",
        }),
        defineField({
            name: "profileImage",
            title: "Profile Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "resume",
            title: "Resume / CV",
            type: "file",
        }),
        defineField({
            name: "socialLinks",
            title: "Social Links",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "platform", type: "string", title: "Platform Name" },
                        { name: "url", type: "url", title: "URL" },
                        { name: "iconName", type: "string", title: "Icon Name (e.g. FiGithub)" },
                    ],
                },
            ],
        }),
        defineField({
            name: "stats",
            title: "Statistics",
            type: "object",
            fields: [
                { name: "experienceYears", type: "string", title: "Years of Experience" },
                { name: "technologiesCount", type: "string", title: "Technologies Count" },
                { name: "projectsCount", type: "string", title: "Projects Count" },
                { name: "clientSatisfaction", type: "string", title: "Client Satisfaction" },
            ],
        }),
        defineField({
            name: "typewriterTexts",
            title: "Typewriter Texts",
            type: "array",
            of: [{ type: "string" }],
        }),
        defineField({
            name: "keyStrengths",
            title: "Key Strengths",
            type: "array",
            of: [{ type: "string" }],
        }),
        defineField({
            name: "techStackPreview",
            title: "Tech Stack Preview",
            type: "array",
            of: [{ type: "string" }],
            description: "List of tech names to show in the about section preview",
        }),
        defineField({
            name: "experienceAreas",
            title: "Experience Areas",
            type: "object",
            fields: [
                { name: "fullStack", type: "string", title: "Full Stack Duration", description: "e.g., '3+ Years'" },
                { name: "backend", type: "string", title: "Backend Duration", description: "e.g., '3+ Years'" },
                { name: "mobile", type: "string", title: "Mobile Duration", description: "e.g., '2+ Years'" },
            ],
        }),
    ],
});
