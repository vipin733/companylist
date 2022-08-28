import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { filterCompanyData } from '../../lib/helper'
import { CompanyType } from '../../lib/types'

const handler = async (req: NextApiRequest, res: NextApiResponse<CompanyType[]>) => {
  let datas: CompanyType[] = []
  try {
    let query = req.body.search
    let response = await axios.post(`${process.env.COMPANY_URL}`, {
      "search": query,
      "filter": "company"
    })

    datas = filterCompanyData(response.data)

    res.status(200).json(datas)
  } catch (error) {
    res.status(200).json(datas)
  }
}

export default handler