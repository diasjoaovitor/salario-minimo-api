import {
  getAllYearMonthsAndSalaries,
  getYearMonthAndSalary,
  scrape
} from '@/functions'
import { TScrapeData } from '@/types'
import { mockedResult, mockedTable } from './mocks'

jest.mock('@/functions/scrape')

const mockedScrape = scrape as unknown as jest.Mock<TScrapeData>

describe('getAllYearMonthsAndSalaries', () => {
  beforeEach(() => {
    mockedScrape.mockImplementation(() => ({
      table: mockedTable
    }))
  })

  it('Separates every sequence of four numbers followed by ".", anything in between, ending with ",00"', async () => {
    const { table } = await scrape()
    const result = getAllYearMonthsAndSalaries(table)
    expect(result).toEqual(mockedResult)
  })

  it('Returns the salary for the yearMonth', () => {
    const mockedValue = {
      yearMonth: '2006-12',
      salary: 350
    }
    const result = getYearMonthAndSalary(mockedResult, '2006-12')
    expect(result).toEqual(mockedValue)
  })
})
