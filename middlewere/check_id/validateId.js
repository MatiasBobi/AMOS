import { z } from 'zod'

export const validateId = (req, res, next) => {
  try {
    const parsedid = parseInt(req.params.id)
    const idSchema = z.number().int()
    if (idSchema.parse(parsedid)) next()
  } catch (error) {
    if (error.errors?.[0]?.code === 'invalid_type') {
      res
        .status(402)
        .json({ error_msg: 'The id parameter must be a valid number.' })
    }

    res.status(402).json({ error_msg: 'Query failed' })
  }
}
