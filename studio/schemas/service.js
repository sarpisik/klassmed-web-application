export default {
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text'
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt'
    },
    prepare ({ title = 'No title', publishedAt }) {
      return {
        title,
        subtitle: publishedAt
          ? new Date(publishedAt).toLocaleDateString()
          : 'Missing publishing date'
      }
    }
  }
}
