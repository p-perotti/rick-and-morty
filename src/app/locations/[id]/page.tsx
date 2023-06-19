'use client'

import { LocationInfo } from '@/Components/LocationInfo'
import { useCallback, useEffect, useState } from 'react'
import { Location, getLocation } from 'rickmortyapi'

interface LocationProps {
  params: {
    id: string
  }
}

export default function LocationDetail({ params }: LocationProps) {
  const [location, setLocation] = useState<Location | undefined>()

  const fetchLocation = useCallback(async () => {
    const response = await getLocation(parseInt(params.id))

    setLocation(response.data)
  }, [params.id])

  useEffect(() => {
    fetchLocation()
  }, [fetchLocation])

  return <LocationInfo location={location} />
}
