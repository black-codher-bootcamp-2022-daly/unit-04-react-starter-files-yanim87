import React, { useState } from "react";
import {Book, PimpedBook} from "./components/Book";
import  { Search }  from "./components/Search";
import data from "./models/books.json";
import { Bookcase } from "/Users/yetundeanimashawun/unit 04 -react-starter-files/bookcase-app/src/components/Bookcase.jsx";

export function App() {
  // const books = data;
  const [books] = useState(data);
  const [keyword, setKeyword] = useState('')
  const [favoBook] = useState(books[4]);
  const [basket, setBasket] = useState([]);
  // let setBooks = data;

  function addBook (id) {
    console.log('click what happened to id: ' + id)
  }

setBasket(newBasket)
{ console.log({ newBasket, basket})}

  return (
    <Booklist>
      <PimpedBook>
        <h2>{favoBook.volumeInfo.title}</h2>
        <p>{favoBook.volumeInfo.description}</p>
      </PimpedBook>
<Bookcase> 
  <h3>{basket}</h3>
</Bookcase>
      <Book handleClick={addBook} id={favoBook.id} title={favoBook.volumeInfo.title} book={favoBook} />
      <Search> keyword={keyword} setKeyword ={setKeyword}</Search> 
      {books.map((item) => (
        <PimpedBook>
          <h2>{item.volumeInfo.title}</h2>
          <p>{item.volumeInfo.description}</p>
        </PimpedBook>
      ))}
    </Booklist>
  );
}

function Booklist(props) {
  return (
    <div>
      <h1> Yetunde's library</h1>
      <div className="booklist-container">{props.children}</div>
    </div>
  );
}

//   return ( 
//     <div className ="App">
//   <Book>
//     {books.map}((book)) => 
//     </Book>
//  <Search> 
//  keyword={keyword} setKeyword ={setKeyword}
//  </Search>
//  <BookList>
// <h1>Yetunde's library </h1>
//  </BookList>
//  <FindBooks>

//  </FindBooks>
//   )
//   </div>

  

// // function findBooks(value) {
// //   const url = `https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-type=books&projection=lite`;

// //   const results = await fetch(url).then(res => res.json());
// //  if (!results.error) {
// //    findBooks(results.items);
// //  }
// // }


//   )}