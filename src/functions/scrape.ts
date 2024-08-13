import scrapeIt from 'scrape-it'
import { TScrapeData } from '@/types'

export const scrape = async () => {
  const { data } = await scrapeIt(
    'http://www.ipeadata.gov.br/exibeserie.aspx?stub=1&serid1739471028=1739471028',
    {
      table: 'table'
    }
  )
  return data as TScrapeData
}
