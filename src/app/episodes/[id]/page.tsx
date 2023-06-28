'use client'

import { useCallback, useEffect, useState } from 'react'
import { Episode, getEpisode } from 'rickmortyapi'
import { EpisodeInfo } from '@/components/EpisodeInfo'

interface EpisodeDetailProps {
  params: {
    id: string
  }
}

export default function EpisodeDetail({ params }: EpisodeDetailProps) {
  const [episode, setEpisode] = useState<Episode | undefined>()

  const fetchEpisode = useCallback(async () => {
    const response = await getEpisode(parseInt(params.id))

    setEpisode(response.data)
  }, [params.id])

  useEffect(() => {
    fetchEpisode()
  }, [fetchEpisode])

  return <EpisodeInfo episode={episode} />
}
