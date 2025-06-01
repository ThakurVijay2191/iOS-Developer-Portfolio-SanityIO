export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Your professional title (e.g., "iOS Developer")',
      validation: Rule => Rule.required()
    },
    {
      name: 'designation',
      title: 'Designation',
      type: 'string',
      description: 'Your current role or position',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description about yourself and your expertise'
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'resume',
      title: 'Resume',
      type: 'file',
      description: 'Upload your resume in PDF format'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Your email address'
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
      description: 'Your phone number'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'geopoint',
      description: 'Your address'
    }, 
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'GitHub', value: 'github' },
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'Twitter', value: 'twitter' },
                  { title: 'Portfolio', value: 'portfolio' }
                ]
              }
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url'
            }
          ]
        }
      ]
    }
  ]
}
