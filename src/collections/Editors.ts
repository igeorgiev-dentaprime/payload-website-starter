import { CollectionConfig } from 'payload'

export const Editors: CollectionConfig = {
  slug: 'editors',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['logo ', 'name'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
