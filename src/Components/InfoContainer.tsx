import { ReactNode } from 'react'

export function InfoContainer({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div className="overflow-hidden rounded-lg bg-white p-4">
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          {title}
        </h3>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">{children}</dl>
      </div>
    </div>
  )
}
