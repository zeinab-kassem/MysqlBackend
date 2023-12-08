import CategoryModel from './CategoryModel.js';
import BookModel from './BookModel.js';
import AuthorModel from './AuthorModel.js';


BookModel.belongsTo(CategoryModel, 
    { foreignKey: 'categoryId', as: 'categories' }
);

CategoryModel.hasMany(BookModel);

BookModel.belongsToMany(AuthorModel, {
    through: "author_books",
    foreignKey: "bookId",
    as:'authors'
  })

AuthorModel.belongsToMany(BookModel, {
    through: "author_books",
    foreignKey: "authorId",
    as:'books'
  })

  
export default { CategoryModel, BookModel, AuthorModel};