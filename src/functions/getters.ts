import { TResponseData } from '@/types'

export const getAllYearMonthsAndSalaries = (table: string): TResponseData[] => {
  const yearMonthsAndSalaries = Array.from(
    new Set(table.match(/[\d]{4}.+,00/g))
  )
  const data = yearMonthsAndSalaries.map((yearMonthAndSalary) => {
    const yearMonth = yearMonthAndSalary.slice(0, 7).replace('.', '-')
    const salary = Number(
      yearMonthAndSalary
        .slice(-(yearMonthAndSalary.length - 7), -3)
        .replace('.', '')
    )
    return { yearMonth, salary }
  })
  return data.reverse()
}

export const getYearMonthAndSalary = (
  data: TResponseData[],
  yearMonth: string
) => data.find((d) => d.yearMonth === yearMonth)
