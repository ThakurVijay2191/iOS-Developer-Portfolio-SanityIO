// schemaTypes/project.js

export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      {
        name: 'projectName',
        title: 'Project Name',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'array',
        of: [
          {
            type: 'block'
          }
        ]
      },
      {
        name: 'skills',
        title: 'Skills/Technologies',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'features',
        title: 'Key Features',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{ type: 'image' }],
      },
      {
        name: 'appStoreLink',
        title: 'App Store Link',
        type: 'url',
      },
      {
        name: 'order',
        title: 'Order',
        type: 'number',
        validation: (Rule) => Rule.required(),
      },
    ],
  }