import { CompanyModel } from '../../models/company/company.module.js'

export class CompanyControllers {
  static async getAllCompaniesController(req, res) {
    try {
      const result = await CompanyModel.getAllCompanies()
      if (!result.success) throw new Error(result?.error)
      res.status(200).json(result.data)
    } catch (error) {
      res.status(400).json({ error: error?.message })
    }
  }
}
