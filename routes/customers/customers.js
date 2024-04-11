import { Router } from 'express'
import { CustomerControllers } from '../../controllers/customer/customersController.js'
import { validateId } from '../../middlewere/check_id/validateId.js'
import { validateData } from '../../middlewere/create_customer_data/validateData.js'
export const customerRouter = Router()

customerRouter.get(
  '/get_all_customers',
  CustomerControllers.getAllCustomersController
)
customerRouter.get(
  '/get_customer/:id',
  validateId,
  CustomerControllers.getCustomerByIdController
)
customerRouter.post(
  '/create_customer',
  validateData,
  CustomerControllers.createCustomerController
)
customerRouter.delete(
  '/deleteCustomer/:id',
  validateId,
  CustomerControllers.deleteCustomerController
)
customerRouter.put(
  '/updateCustomer/:id',
  validateId,
  validateData,
  CustomerControllers.updateCustomerController
)
