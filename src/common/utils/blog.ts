export const getArticlePath = (slug: string) => {
  if (!slug) return '';

  return `/blog/articles/${slug}`;
}
