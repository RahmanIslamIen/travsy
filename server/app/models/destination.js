const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Destination extends Model {
    static associate(models) {
      this.Packages = Destination.belongsToMany(models.Package, {
        through: models.PackageDetail,
      });
    }
  }
  Destination.init(
    {
      destinationId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      destinationName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      imageUrl: {
        type: DataTypes.STRING,
      },
      city: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Destination',
      tableName: 'destinations',
      underscored: true,
      paranoid: true,
    },
  );
  return Destination;
};
