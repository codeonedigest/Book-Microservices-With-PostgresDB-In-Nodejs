const Sequelize = require('sequelize');
const dbconfig = require('../config/databaseconfig');


//Creating DB connection 
const sequelize = new Sequelize(dbconfig.booksPostgresURI, {
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

