import { DataTypes } from 'sequelize'
import { sequelize } from '../database/postgres/database.js'

export const Country = sequelize.define(
  'country',
  {
    country_id: {
      type: DataTypes.SMALLINT,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    underscored: true,
    timestamps: false
  }
)
