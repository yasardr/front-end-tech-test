import { Link } from "react-router-dom";

export const ProductListItem = ({ product, addProduct, removeProduct, amount }) => {
  const { _id, name, image, price, category } = product;

  return (
    <div className="list-item">
        <div className="image">
            <Link to={`/details/${_id}`}>
                <img width="200" src={`http://localhost:5000/${image}`} alt={name} />
            </Link>
        </div>

        <div className="info">
            <Link className="title" to={`/details/${_id}`}>
                {name}
            </Link>
            <span className="category">{category}</span>
            <div className="total">
                <ul>
                    <li>Price: ${price} USD</li>
                    <li>Amount: {amount}</li>
                    <li>Total: ${(amount * price).toFixed(2)} USD</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
