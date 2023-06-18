const Sequelize = require('sequelize');

//const { Schema } = mongoose;

//Creating DB connection 
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/postgres', {
  dialect: 'postgres'
});
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('unable to connect to database', err);
});

const BookSchema = sequelize.define('book', {

    id: {
      type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING
      },
      authorName: {
        type: Sequelize.STRING
      },
      releaseDate: {
        type: Sequelize.DATE
      }

});

//BookSchema.sync({force:true})
module.exports = BookSchema;

