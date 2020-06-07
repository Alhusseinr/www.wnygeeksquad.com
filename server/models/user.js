'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    email: DataTypes.STRING,
    message: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};