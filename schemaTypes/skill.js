export default {
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
      {
        name: 'skillName',
        title: 'Skill Name',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'type',
        title: 'Type',
        type: 'string',
        options: {
          list: [
            { title: 'Language', value: 'language' },
            { title: 'Framework/Library', value: 'framework' },
            { title: 'Tool', value: 'tool' },
            { title: 'Design', value: 'design' },
            { title: 'Other', value: 'other' },
          ],
          layout: 'radio',
        },
        validation: Rule => Rule.required(),
      },
      {
        name: 'icon',
        title: 'Icon',
        type: 'image',
      },
      {
        name: 'ratio',
        title: 'Skill Level (1-5)',
        type: 'number',
        validation: Rule => Rule.min(1).max(5),
        description: 'Skill proficiency, from 1 (lowest) to 5 (highest)',
      },
    ],
  }