import { DataTypes } from 'sequelize'
import { sequelize } from '../database/postgres/database.js'
import { Company } from './company.schema.js'
import { Country } from './country.schema.js'

export const Customer = sequelize.define(
  'customer',
  {
    client_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    country_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    client_address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    social_media: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone_contact: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'active'
    },
    customer_image: {
      type: DataTypes.STRING,
      defaultValue: 'user_icon.png'
    }
  },
  {
    freezeTableName: true,
    underscored: true,
    timestamps: true,
    initialAutoIncrement: 1000
  }
)

Company.hasMany(Customer, {
  foreignKey: 'company_id',
  sourceKey: 'company_id'
})

Customer.belongsTo(Company, {
  foreignKey: 'company_id',
  targetKey: 'company_id'
})

Country.hasMany(Customer, {
  foreignKey: 'country_id',
  targetKey: 'country_id'
})

Customer.belongsTo(Country, {
  foreignKey: 'country_id',
  targetKey: 'country_id'
})
