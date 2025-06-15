import { POST_QUERYResult } from '@/sanity/types'
import dayjs from 'dayjs'
import 'dayjs/locale/fr'

type PublishedAtProps = {
  publishedAt: NonNullable<POST_QUERYResult>['_createdAt'],
  className?:string,
}

export function PublishedAt({ publishedAt, className }: PublishedAtProps) {

  //require('dayjs/locale/fr')

dayjs.locale('fr')
  return publishedAt ? (
    <p className={className}>
      {dayjs(publishedAt).locale('fr').format('D MMMM YYYY')}
    </p>
  ) : null
}