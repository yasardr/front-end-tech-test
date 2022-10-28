import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const ProductItem = ({ cart, product, addProduct, removeProduct }) => {

  const { _id, name, image, rating, numReviews, price, countInStock } = product;
  const [stock, setStock] = useState(countInStock);

  useEffect(() => {
    if (cart.length !== 0) {
      const product = cart.filter(p => p.id === _id);
      console.log(product);
      if (product.length > 0) {
        setStock(countInStock - product[0].amount);
        console.log('Actualizar stock');
      }
    }
  }, []);
  
  const handleAddProduct = id => {
    addProduct(id);
    setStock(stock - 1);
  }

  const handleRemoveProduct = id => {
    removeProduct(id);
    if (stock + 1 <= countInStock) {
      setStock(stock + 1);
    }
  }

  return (
    <div className="card">
      <Link to={`/details/${_id}`}>
        <img width="200" src={`http://localhost:5000/${image}`} alt={name} />
        <span className="reviews">{numReviews} <i className="fa-regular fa-eye"></i></span>
      </Link>
      <div className="card-info">
        <Link className="title" to={`/details/${_id}`}>
          {name}
        </Link>
        <span>Price: ${price} USD</span>
        <div className="details">
          <span>Stock: {stock}</span>
          <span>{rating} <i className="fa-regular fa-star"></i></span>
        </div>
        <button className={`btn btn-blue ${stock === 0 ? 'inactive' : 'active'}`} type="button" onClick={ () => handleAddProduct(_id) }>
          Add item to cart
        </button>
        <button className="btn btn-red" type="button" onClick={ () => handleRemoveProduct(_id) }>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  )
}
