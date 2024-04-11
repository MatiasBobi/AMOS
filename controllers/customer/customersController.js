import { CustomerModel } from '../../models/customer/customer.module.js'
export class CustomerControllers {
  static async getAllCustomersController(req, res) {
    try {
      const result = await CustomerModel.getAllCustomers()
      if (!result.success) throw new Error(result?.error)
      res.status(200).json(result?.data)
    } catch (error) {
      res.status(400).json({ msg: 'Query failed', error: error.message })
    }
  }

  static async createCustomerController(req, res) {
    try {
      const result = await CustomerModel.createCustomer(req.body)
      if (!result.success) throw new Error(result?.error)
      res.status(201).json({ msg: 'Creado el customer' })
    } catch (error) {
      res.status(401).json({ error: error.message })
    }
  }

  static async getCustomerByIdController(req, res) {
    try {
      const result = await CustomerModel.getCustomerById(req.params.id)
      if (!result.success) throw new Error(result?.error)
      res.status(201).json(result.customer)
    } catch (error) {
      res.status(401).json({ error: error.message })
    }
  }

  static async deleteCustomerController(req, res) {
    try {
      const result = await CustomerModel.deleteCustomer(req.params.id)
      if (!result.success) throw new Error(result?.error)
      res.status(200).json({ msg: 'Delete succesfully' })
    } catch (error) {
      res.status(403).json({ msg: 'Delete fail ', errorMsg: error.message })
    }
  }

  static async updateCustomerController(req, res) {
    try {
      const result = await CustomerModel.updateCustomer(req.params.id, req.body)
      if (!result.success) throw new Error(result?.error)
      res.status(200).json({ msg: 'The user was successfully updated' })
    } catch (error) {
      res.status(403).json({ msg: 'Update fail ', errorMsg: error.message })
    }
  }
}
