import {createContext, useState} from 'react'

export const CustomContext = createContext();

export const Context = (props) => {

  // Books Collection
  const bookCollection = [
    {id: 1,title: 'JS'},
    {id: 2,title: 'React'},
    {id: 3,title: 'TS'}
  ];

  const [books, setBooks] = useState(bookCollection);

  // Add new book to the books collection
  const addBook = (book) => setBooks([...books, book]);

  // Remove book from the books collection
  const removeBook = (id) => setBooks(bookCollection.filter(book => book.id !== id));
} 