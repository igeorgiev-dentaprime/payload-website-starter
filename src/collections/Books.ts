import { CollectionConfig } from 'payload'

export const Books: CollectionConfig = {
  slug: 'books',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'author',
      type: 'text',
    },
    {
      name: 'editor',
      type: 'relationship',
      relationTo: 'editors',
      required: true,
    },
  ],
}
