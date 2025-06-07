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
            { title: 'Languages/Frameworks', value: 'languagesOrFrameworks' },
            { title: 'Apple Technologies', value: 'appleTechnologies' },
            { title: 'Tool & Platforms', value: 'toolAndPlatforms' },
            { title: 'Other', value: 'other' },
          ],
          layout: 'radio',
        },
        validation: Rule => Rule.required(),
      },
      {
        name: 'ratio',
        title: 'Skill Level (0-100%)',
        type: 'number',
        validation: Rule => Rule.min(0).max(100),
        description: 'Skill proficiency as a percentage, from 0% (lowest) to 100% (highest)',
      },
    ],
  }