export const ProductListItem = ({ product, addProduct, removeProduct, amount }) => {
  const { name, image, rating, numReviews, price, category } = product;

  return (
    <div className="list-item">
        <div className="image">
            <img width="200" src={`http://localhost:5000/${image}`} alt={name} />
        </div>

        <div className="info">
            <span className="title">{name}</span>
            <div className="details">  
                <span className="category">{category}</span>
                <span className="reviews">{numReviews} <i className="fa-regular fa-eye"></i></span>
                <span>{rating} <i className="fa-regular fa-star"></i></span>
            </div>
            <div className="total">
                <ul>
                    <li>Price: ${price} USD</li>
                    <li>Amount: {amount}</li>
                    <li>Total: ${amount * price} USD</li>
                </ul>
            </div>
            {/* <div className="actions">
                <button className="btn btn-blue" type="button" onClick={ () => addProduct(_id) }>
                    -
                </button>
                <span>{amount}</span>
                <button className="btn btn-red" type="button" onClick={ () => removeProduct(_id) }>
                    +
                </button>
            </div> */}
        </div>
    </div>
  )
}
