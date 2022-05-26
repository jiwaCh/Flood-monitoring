module.exports = (sequelize, DataTypes) => {
    dialectOptions: {
        options: {
            requestTimeout: 300000
        }
    }
    const Stations = sequelize.define("Stations", {
        "notation": {
            type: DataTypes.STRING,
            allowNull: false,
        },
        "label": {
            type: DataTypes.STRING,
            allowNull: false,
        },
        "lat": {
            type: DataTypes.DOUBLE,
        },
        "long": {
            type: DataTypes.DOUBLE,
        },
        "riverName": {
            type: DataTypes.STRING,
        },
        "catchmentName": {
            type: DataTypes.STRING,
        },
        "town": {
            type: DataTypes.STRING,
        },


});


    return Stations;
};