import { CountryModel } from '../../models/country/country.module.js'

export class CountryController {
  static async getAllCountriesController(req, res) {
    try {
      const result = await CountryModel.getAllCountries()
      if (!result.success) throw new Error(result?.error)
      res.status(200).json(result.data)
    } catch (error) {
      res.status(400).json({ error: error?.message })
    }
  }
}
