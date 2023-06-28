import { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface CardProps {
  children?: ReactNode
  type: string
  id: number
  name: string
  description?: string
  image?: string
}

export function Card({
  children,
  type,
  id,
  name,
  description,
  image,
}: CardProps) {
  return (
    <Link href={`/${type}/${encodeURIComponent(id)}`} className="group">
      {image && (
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <Image
            src={image}
            alt={name}
            width={300}
            height={300}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
      )}
      <h3 className="mt-4 text-lg font-medium text-gray-900">{name}</h3>
      {children || <p className="text-sm text-gray-700">{description}</p>}
    </Link>
  )
}
