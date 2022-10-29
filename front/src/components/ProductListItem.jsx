import { useState } from 'react';
import { Link } from 'react-router-dom';

export const ProductListItem = ({ product, removeProduct, _amount }) => {

  const { _id, name, image, price, category } = product;
  const [amount, setAmount] = useState(_amount);

  const handleRemoveProduct = id => {
    removeProduct(id);
    if (amount - 1 > 0) {
      setAmount(amount - 1);
    }
  }

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
            <div className="action">
                <span className="category">{category}</span>
                <button className="btn btn-red" type="button" onClick={ () => handleRemoveProduct(_id) }>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
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
