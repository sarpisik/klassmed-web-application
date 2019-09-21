export default {
  name: 'faq',
  title: 'Questions',
  type: 'document',
  fields: [
    {
      title: 'Question',
      name: 'question',
      type: 'string'
    },
    {
      title: 'Answer',
      name: 'answer',
      type: 'text'
    }
  ],
  preview: {
    select: {
      title: 'question',
      publishedAt: 'publishedAt'
    },
    prepare({ title = 'No title', publishedAt }) {
      return {
        title,
        subtitle: publishedAt
          ? new Date(publishedAt).toLocaleDateString()
          : 'Missing publishing date'
      }
    }
  }
}
