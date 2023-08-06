import Article from '@/common/components/article';
import Heading from '@/common/components/heading';
import { fetchNotionDatabase } from '@/lib/notion';
import { Article as Post } from '@/common/types/article';

const BlogPage = async () => {
  const posts = await fetchNotionDatabase();

  return (
    <section className='relative'>
      <section className='flex flex-col mb-10'>
        <Heading level={2} as='h2'>Blog</Heading>
        <p className='text-slate-600'>Nơi mình chia sẻ những tâm sự về cuộc sống, IT và một số chủ đề khác</p>
      </section>
      <section className='grid grid-cols-2 gap-x-3 gap-y-5'>
        {(() => {
          if (!posts.length) {
            return <Empty />;
          }
          return posts.map((article) => <Article key={article.id} {...article as Post} />)
        })()}
      </section>
    </section>
  )
}

const Empty = () => {
  return <p className='text-center text-slate-700 flex-1 py-5 bg-gray-200'>
    Hiện tại mình chưa có bài viết nào cả, các bạn quay lại sau nha &heart;
  </p>
}

export default BlogPage
