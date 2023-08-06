import type { FC } from 'react'
import type { Article as Props } from '@/common/types/article'
import Heading from './heading';
import Link from 'next/link';
import { getArticlePath } from '@/common/utils/blog';
import Image from 'next/image';

const AVATAR_IMAGE_SIZE = 25;

const Article: FC<Props> = (data) => {
  const { properties } = data;
  const { Author, Slug, Title } = properties;

  // Metadatas
  const article = {
    title: Title?.title?.[0]?.text?.content,
    slug: Slug?.rich_text[0]?.text?.content,
    cover: (() => {
      if (data?.cover?.external) {
        return data?.cover.external.url;
      }
      return data?.cover?.file?.url;
    })()
  }

  const author = {
    avatar: Author.people[0].avatar_url,
    name: Author.people[0].name,
  }

  return <article className='group flex flex-col flex-shrink-0 rounded-md basis-1/2 h-auto'>
    <Link className='transition duration-300 hover:text-sky-600 block' href={getArticlePath(article.slug)} >
      <figure className='relative w-full h-32 mb-3 bg-gray-100 rounded-md overflow-hidden'>
        {article.cover &&
          <Image fill className='object-cover' src={article.cover} alt={author.name} quality={100} />
        }
      </figure>
      <div className='flex flex-col'>
        <Heading as='h3' level={5}>
          {article.title}
        </Heading>
        <div className='flex flex-row gap-2 items-center mt-2'>
          <Image className='rounded-full' src={author.avatar} alt={author.name} width={AVATAR_IMAGE_SIZE} height={AVATAR_IMAGE_SIZE} />
          <p className='text-sm text-slate-700'>{author.name}</p>
        </div>
      </div>
    </Link>
  </article >
}

export default Article;
