export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'dateStarted',
      title: 'Date Started',
      type: 'date',
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: 'MMM-yyyy',
      }
    },
    {
      name: 'dateEnded',
      title: 'Date Ended',
      type: 'date',
      options: {
        dateFormat: 'MMM-yyyy',
      }
    },
    {
      name: 'isCurrentlyWorkingHere',
      title: 'Currently Working Here',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
  ]
}
