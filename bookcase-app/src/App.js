import React, { useState } from "react";
import Book from "./components/Book";
import { Search } from "./components/Search";
import data from "./models/books.json";

function App() {
  // const books = data;
  const [books] = useState(data);
  const [keyword, setKeyword] = useState('')
  const favobook = books[4];
  let setBooks = data;

  function addBook (id) {
    console.log('click what happened to id: ' + id)
  }

  return ( 
  <BookList>
    {books.map}((book)) => </BookList>
 
  )
function Search (){
  return ( <Search keyword={keyword} setKeyword ={setKeyword}/>)
}

  function BookList(props) {
    return (
      <h1>Yetunde's library </h1>
    )
      }
  

}
async function findBooks(value) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-type=books&projection=lite`;

  const results = await fetch(url).then(res => res.json());
 if (!results.error) {
   setBooks(results.items);
 }
}

export default App;
