export default function sitemap() {

  const currentDate = new Date().toISOString();

    return [
      {
        url: 'https://xdebutantes.com',
        lastModified: currentDate,
        changeFrequency: 'dayli',
        priority: 1,
      },
      {
        url: 'https://www.xdebutantes.com',
        lastModified: currentDate,
        changeFrequency: 'dayli',
        priority: 0.8,
      },
      {
        url: 'http://xdebutantes.com',
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.3,
      },
      {
        url: 'http://www.xdebutantes.com',
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.3,
      },
    ]
  }