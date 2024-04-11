import { Company } from '../../schemas/company.schema.js'

export class CompanyModel {
  static async getAllCompanies() {
    try {
      const result = await Company.findAll({
        attributes: ['company_id', 'name']
      })
      if (!result) throw new Error('No company has been found in the database.')
      return { success: true, data: result }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }
}
