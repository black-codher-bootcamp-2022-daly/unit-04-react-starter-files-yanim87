import React from "react";
import Book  from '.Book';
export const Bookcase = ({books}) => {

    return <div> Bookcase will go here
        <h2>(books.length)</h2>
        (books.map({book} = <Book book={book}/>)
    </div>
    
};
export default Bookcase;