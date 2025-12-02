import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'component',
    title: 'Component',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Component Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Short Description',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.required().max(200),
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Buttons', value: 'buttons' },
                    { title: 'Forms', value: 'forms' },
                    { title: 'Cards', value: 'cards' },
                    { title: 'Navigation', value: 'navigation' },
                    { title: 'Modals', value: 'modals' },
                    { title: 'Animations', value: 'animations' },
                    { title: 'Layout', value: 'layout' },
                    { title: 'Data Display', value: 'data-display' },
                    { title: 'Feedback', value: 'feedback' },
                    { title: 'Other', value: 'other' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
        }),
        defineField({
            name: 'previewImage',
            title: 'Preview Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'previewCode',
            title: 'Preview Code',
            type: 'code',
            options: {
                language: 'tsx',
                languageAlternatives: [
                    { title: 'TypeScript React', value: 'tsx' },
                    { title: 'JavaScript React', value: 'jsx' },
                ],
            },
        }),
        defineField({
            name: 'content',
            title: 'Blog Content',
            type: 'array',
            of: [
                {
                    type: 'block',
                },
                {
                    type: 'code',
                    options: {
                        language: 'tsx',
                        languageAlternatives: [
                            { title: 'TypeScript React', value: 'tsx' },
                            { title: 'JavaScript React', value: 'jsx' },
                            { title: 'CSS', value: 'css' },
                            { title: 'HTML', value: 'html' },
                        ],
                    },
                },
                {
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                },
            ],
        }),
        defineField({
            name: 'dependencies',
            title: 'Dependencies',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'NPM dependencies needed for this component',
        }),
        defineField({
            name: 'difficulty',
            title: 'Difficulty Level',
            type: 'string',
            options: {
                list: [
                    { title: 'Beginner', value: 'beginner' },
                    { title: 'Intermediate', value: 'intermediate' },
                    { title: 'Advanced', value: 'advanced' },
                ],
            },
        }),
        defineField({
            name: 'liveDemo',
            title: 'Live Demo URL',
            type: 'url',
        }),
        defineField({
            name: 'codeRepository',
            title: 'Code Repository URL',
            type: 'url',
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
    ],
    preview: {
        select: {
            title: 'title',
            category: 'category',
            media: 'previewImage',
        },
        prepare(selection) {
            const { title, category } = selection;
            return {
                ...selection,
                subtitle: category ? `Category: ${category}` : 'No category',
            };
        },
    },
});
