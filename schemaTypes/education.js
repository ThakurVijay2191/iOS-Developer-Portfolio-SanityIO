export default {
    name: 'education',
    title: 'Education',
    type: 'document',
    fields: [
    {
      name: 'degreeName',
      title: 'Degree Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'institutionName',
      title: 'Institution Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: 'MMM-yyyy',
      }
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      options: {
        dateFormat: 'MMM-yyyy',
      }
    },
    {
      name: 'isCurrentlyStudying',
      title: 'Currently Studying Here',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'grade',
      title: 'Grade/Marks',
      type: 'string',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }
    ]
  }
  