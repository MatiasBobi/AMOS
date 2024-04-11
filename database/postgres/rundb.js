import { sequelize } from './database.js'

export const rundb = async () => {
  try {
    await sequelize.sync()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.log('Unable to connect to the database: ', error)
  }
}
