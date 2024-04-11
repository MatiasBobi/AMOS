import { createCustomerValidator } from '../../validators/zod/customer.validator.js'

export const validateData = (req, res, next) => {
  try {
    const parseData = createCustomerValidator.parse(req.body)
    if (parseData) next()
  } catch (error) {
    res.status(402).json({ error_msg: error.errors?.[0]?.message })
  }
}
