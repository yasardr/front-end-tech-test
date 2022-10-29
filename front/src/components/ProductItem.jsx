import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert } from './Alert';

export const ProductItem = ({ cart, product, addProduct }) => {

  const { _id, name, image, rating, numReviews, price, countInStock } = product;
  const [stock, setStock] = useState(countInStock);
  const [alert, setAlert] = useState({
    title: '',
    message: '',
    icon: '',
    color: '',
    status: false
  });

  useEffect(() => {
    if (cart.length !== 0) {
      const product = cart.filter(p => p.id === _id);
      if (product.length > 0) {
        setStock(countInStock - product[0].amount);
      }
    }
  }, []);
  
  const handleAddProduct = id => {
    const resp = addProduct(id);
    setAlert({
      title: 'Add',
      message: resp,
      icon: 'fa-solid fa-check',
      color: 'green',
      status: true
    });
    setStock(stock - 1);
  }

  const onCloseAlert = () => {
    setAlert({
      ...alert,
      status: false
    });
  }

  return (
    <>
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
        </div>
      </div>

      {
        alert.status && <Alert onCloseAlert={onCloseAlert} {...alert} />
      }
    </>
  )
}
