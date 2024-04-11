import { Customer } from '../../schemas/customer.schema.js'
import { Country } from '../../schemas/country.schema.js'
import { Company } from '../../schemas/company.schema.js'
export class CustomerModel {
  static async getAllCustomers() {
    try {
      const data = await Customer.findAll({
        include: [
          {
            model: Country,
            attributes: ['name']
          },
          {
            model: Company
          }
        ]
      })
      if (!data) throw new Error('Customers not found')
      return { success: true, data }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  static async getCustomerById(id) {
    try {
      console.log(id)
      const customer = await Customer.findByPk(id, {
        include: [
          {
            model: Country,
            attributes: ['name']
          },
          {
            model: Company
          }
        ]
      })
      if (!customer) throw new Error('Client not found')
      return { success: true, customer }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  static async createCustomer(data) {
    try {
      await Customer.create(data)
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  static async deleteCustomer(id) {
    try {
      const customer = await Customer.findByPk(id)
      if (!customer) throw new Error('Client not found')
      await Customer.destroy({
        where: {
          client_id: id
        }
      })

      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  static async updateCustomer(id, updateFields) {
    try {
      const customer = await Customer.findByPk(id)
      if (!customer) throw new Error('Client not found')
      Object.keys(updateFields).forEach((field) => {
        customer.set(field, updateFields[field])
      })
      await customer.save()
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }
}
