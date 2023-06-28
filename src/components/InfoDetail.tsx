import { ReactNode } from 'react'

interface InfoDetailProps {
  children: ReactNode
  title: string
  isImage?: boolean
}

export function InfoDetail({
  children,
  title,
  isImage = false,
}: InfoDetailProps) {
  return (
    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <dt className="text-sm font-medium leading-6 text-gray-900">{title}</dt>
      {isImage ? (
        <dd className="mt-1">{children}</dd>
      ) : (
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          {children}
        </dd>
      )}
    </div>
  )
}
