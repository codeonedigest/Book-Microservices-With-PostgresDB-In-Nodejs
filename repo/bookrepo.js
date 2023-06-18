
class BookRepository {

    constructor(bookModel) {
        this.bookModel = bookModel;
    }

    addBook(uuid, name, releaseDate, authorName) {
        return this.bookModel.create({
          uuid,
          name,
          releaseDate,
          authorName,
        });
      }

      getAllBooks() {
        return this.bookModel.findAll();
      }
    
      getBookById(uuid) {
        return this.bookModel.findOne({ 
          where: {
            id: uuid
          }
        }).then(function(book) {
          if (!book) {
              return 'book not found';
          }
          return book.dataValues;
        });
      }
    
      async updateBookById(uuid, updatename, updatereleaseDate, updateauthorName) {
        var updatedBookObject = {};
        //const {count} = await 
        return this.bookModel.update( 
          { name: updatename, authorName: updateauthorName, releaseDate: updatereleaseDate},                    
          {returning: true, plain: true, where: {id: uuid} }).then(function(result) {  
            
            if (result != null && result.length > 0){              
              console.log('updated record ' + result[1].dataValues);          
              return result[1].dataValues;
            } else {
              return updatedBookObject;
            }
                          
          });
        
      }

      
    
      async deleteBookById(uuid) {
        const count = await this.bookModel.destroy({ 
          where: {
            id: uuid
          }
        })
        console.log('deleted row(s):' + count);
        /*.then(function(count) {
          if (!count) {
              return 'book not found';
          }
          return count;
        });*/

        return count;
      }  

}

module.exports = {
    BookRepository,
};