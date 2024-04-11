import { DataTypes } from 'sequelize'
import { sequelize } from '../database/postgres/database.js'

export const Company = sequelize.define(
  'company',
  {
    company_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country_id: {
      type: DataTypes.SMALLINT,
      unique: true
    },
    address: {
      type: DataTypes.STRING
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    social_media: {
      type: DataTypes.STRING
    },
    contact_phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contact_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    company_identification: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    company_tax_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    underscored: true,
    timestamps: true
  }
)
