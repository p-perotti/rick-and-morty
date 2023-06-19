import { ReactNode } from 'react'

export function Header({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3 sm:px-6">
      <h3 className="text-base font-semibold leading-7 text-gray-900">
        {title}
      </h3>
      {children}
    </div>
  )
}
