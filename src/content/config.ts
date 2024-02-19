import { z, defineCollection } from 'astro:content'

const ocSchema = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    species: z.string(),
    gender: z.enum(['male', 'female']),
    images: z.array(z.string())
  })
})

const blogSchema = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    date: z.date(),
    image: z.string().optional()
  })
})

export const collections = {
  oc: ocSchema,
  blog: blogSchema
}