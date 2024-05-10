module.exports = (sequelize, Sequelize) => sequelize.define('duplicate_events', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  raw_event: {
    type: Sequelize.JSON, // Changed from Sequelize.STRING to Sequelize.JSON
    allowNull: false,
  },
  duplicate_ids: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  reason: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  deleted: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});
