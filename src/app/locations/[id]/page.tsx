'use client'

import { LocationInfo } from '@/components/LocationInfo'
import { useCallback, useEffect, useState } from 'react'
import { Location, getLocation } from 'rickmortyapi'

interface LocationDetailProps {
  params: {
    id: string
  }
}

export default function LocationDetail({ params }: LocationDetailProps) {
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
