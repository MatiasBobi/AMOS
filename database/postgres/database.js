import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize('amos_db', 'postgres', 'your_password', {
  host: 'localhost',
  dialect: 'postgres'
})
