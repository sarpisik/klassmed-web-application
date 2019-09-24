export default {
  name: 'message',
  title: 'Messages',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subTitle: 'email'
    }
  }
}
