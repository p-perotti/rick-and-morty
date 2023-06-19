import { useMemo } from 'react'

export function StatusDisplay({
  status = '',
  extra,
}: {
  status?: string
  extra?: string
}) {
  const statusStyle = useMemo(() => {
    switch (status) {
      case 'Alive':
        return 'bg-green-600'
      case 'Dead':
        return 'bg-red-600'
      case 'unknown':
        return 'bg-gray-600'
      default:
        return ''
    }
  }, [status])

  return (
    <div className="flex items-center">
      <span className={`mr-1 h-2 w-2 rounded-full ${statusStyle}`} />
      {status}
      {extra && extra}
    </div>
  )
}
