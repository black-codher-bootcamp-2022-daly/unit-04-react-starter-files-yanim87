import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
function Book({book}) {
  const { title, authors } = book.volumeInfo;
  const { retailPrice } = book.saleInfo;
  console.log(book)
  return (
    <div style={{
      backgroundColor: 'pink'
    }}>
      <h3>Title: {title}</h3>
      <p>Author: {authors}</p>
      <p>{retailPrice && retailPrice.amount}</p>
    </div>
  );
}

export default Book;