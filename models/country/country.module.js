import { Country } from '../../schemas/country.schema.js'

export class CountryModel {
  static async getAllCountries() {
    try {
      const result = await Country.findAll()
      if (!result) throw new Error('No country has been found in the database.')
      return { success: true, data: result }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }
}
