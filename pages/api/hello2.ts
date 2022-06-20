// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

/**
 * @swagger
 * /api/hello2:
 *   get:
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: hello world2
 */
const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ name: 'John Doe' })
}

export default handler
