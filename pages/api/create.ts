import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  try {

    let { cin, name } = req.body
    if (!cin || !name) {
      return res.status(422).json("not valid request, try again")
    }

    if (typeof cin != "string" || typeof name != "string") {
      return res.status(422).json("not valid request, try again")
    }

    const old = await prisma.company.findUnique({
      where: {
        cin: cin,
      },
    });
    if (old) {
      return res.status(200).json({ data: old })
    }

    const result = await prisma.company.create({
      data: {
        cin: cin,
        name: name,
      },
    });

    res.status(200).json({ data: result })
  } catch (error) {
    res.status(500).json({ message: "server error" })
  }
}

export default handler