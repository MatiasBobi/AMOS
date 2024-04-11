import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize('amos_db', 'postgres', 'decano159357', {
  host: 'localhost',
  dialect: 'postgres'
})
