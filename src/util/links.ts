export function getIdFromLink(
  link: string,
  type: 'character' | 'location' | 'episode',
) {
  return link.replace(`https://rickandmortyapi.com/api/${type}/`, '')
}
