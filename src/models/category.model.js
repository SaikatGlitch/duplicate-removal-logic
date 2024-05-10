module.exports = (sequelize, Sequelize) => sequelize.define('category', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  image_url: {
    type: Sequelize.STRING(1000),
    allowNull: false,
  },
  deleted: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  category_order: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});
