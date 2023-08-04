import type { FC } from "react";

type Props = {
  params: {
    slug: string
  }
}

const ArticleDetailPage: FC<Props> = async ({ params }) => {
  const { slug } = params;

  console.log(slug);

  return (
    <div dangerouslySetInnerHTML={{ __html: '' }}></div>
  )
}

export default ArticleDetailPage
