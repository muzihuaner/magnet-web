import type { NextApiRequest, NextApiResponse } from 'next'
import { pirateBay } from '../../src/torrent/pirate-bay'

type Res = {
  code: number
  data: any
  msg: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Res>) {
  const html = await pirateBay('1080')
  if (!html) {
    res.status(200).json({
      code: 4000,
      data: null,
      msg: '获取失败'
    })
    return
  }
  res.status(200).json({
    code: 2000,
    data: html,
    msg: '获取成功'
  })
}