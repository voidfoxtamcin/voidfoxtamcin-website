import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        date: z.date(),
        image: z.string().optional(),
        published: z.boolean().default(false),
    })
})

const ocCollection = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        gender: z.string(),
        species: z.string(),
        image: z.string(),
        description: z.string(),
        images: z.array(z.string())
    })
})

export const collections = {
    blog: blogCollection,
    oc: ocCollection
}