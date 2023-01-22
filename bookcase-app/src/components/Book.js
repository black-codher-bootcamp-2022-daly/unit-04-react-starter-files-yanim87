import React from "react";
import PropTypes from "prop-types";

export function Book(props) {
  return (
    <div
      style={{
        backgroundColor: "red",
        padding: "10px",
        marginBottom: "4px",
        fontFamily: Arial,
      }}
    >
      <h3>{props.title}</h3>
      <p>{props.book.volumeInfo.description}</p>
      <button onClick={() => props.handleClick(props.id)}>Click me</button>
      {props.retailPrice && props.retailPrice.amount < 3
        ? "Great deal"
        : "Best Seller"}
    </div>
  );
}

export function PimpedBook(props) {
  return (
    <div style={{ padding: "12px", border: "1px solid", marginBottom: "4px" }}>
      {props.children}
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  retailPrice: PropTypes.shape({
    amount: PropTypes.number,
  }),
  handleClick: PropTypes.func,
  book: PropTypes.shape({
    volumeInfo: PropTypes.shape({
      title: PropTypes.string.isRequired,
      authors: PropTypes.array.isRequired,
      description: PropTypes.string.isRequired,
    }),
    saleInfo: PropTypes.shape({
      retailPrice: PropTypes.shape({
        amount: PropTypes.number.isRequired,
      }),
    }),
  }),
};

// function Book() {
//   return "This is the output of a book component. Replace this string with code to display an individual book's attributes.";
// }

// export function Book({ book }) {
//   const { title } = book.volumeInfo;
//   const { retailPrice } = book.saleInfo;
//   return (
//     <div style={{
//       backgroundColor: "red",
//       padding: "10px",
//       marginBottom: "4px"}}>
//       <h3>{title}</h3>
//       {retailPrice && retailPrice.amount < 3 ? "Great deal" : "Best Seller"}
      
//     </div>
//   );
// }

// Book.propTypes = {
//   book: PropTypes.shape({
//     volumeInfo: PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       authors: PropTypes.array.isRequired,
//       description: PropTypes.string.isRequired,
//     }),
//     saleInfo: PropTypes.shape({
//       retailPrice: PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//       }),
//     }),
//   }),
// };

// export default Book;
