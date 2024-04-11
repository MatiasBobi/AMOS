import { Router } from 'express'
import { CountryController } from '../../controllers/country/countryController.js'

export const countryRouter = Router()

countryRouter.get(
  '/getAllCountries',
  CountryController.getAllCountriesController
)
