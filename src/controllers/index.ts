import { Request, Response } from 'express'
import {
  getAllYearMonthsAndSalaries,
  getYearMonthAndSalary,
  scrape
} from '@/functions'

export const index = async (_: Request, res: Response) => {
  try {
    const { table } = await scrape()
    const data = getAllYearMonthsAndSalaries(table)
    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json({
      msg: 'Request error',
      error: error
    })
  }
}

export const show = async (req: Request, res: Response) => {
  try {
    const { period } = req.params
    const { table } = await scrape()
    const data = getAllYearMonthsAndSalaries(table)
    const result = getYearMonthAndSalary(data, period)
    return res.status(200).json(result)
  } catch (error) {
    return res.status(500).json({
      msg: 'Request error',
      error: error
    })
  }
}
