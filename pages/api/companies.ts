import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

const handler = async (_: NextApiRequest, res: NextApiResponse<any>) => {
  try {
    const companies = await prisma.company.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    res.status(200).json(companies)
  } catch (error) {
    res.status(500).json({message: "server error"})
  }
}

export default handler