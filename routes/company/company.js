import { Router } from 'express'
import { CompanyControllers } from '../../controllers/company/companyController.js'

export const companyRouter = Router()

companyRouter.get(
  '/getAllCompanies',
  CompanyControllers.getAllCompaniesController
)
