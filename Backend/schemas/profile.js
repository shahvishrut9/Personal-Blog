export default {
    name: 'profile',
    type: 'document',
    title: 'Profile',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'name',
            type: 'string',
            title: 'Name',
        },
        {
            name: 'desc',
            title: 'Profile Description',
            type: 'array',
            of: [
              {
                type: 'block'
              }
            ]
          },
        {
            name: 'resume',
            type: 'string',
            title: 'Resume',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
                hotspot:true
            }
        },

    ]
}