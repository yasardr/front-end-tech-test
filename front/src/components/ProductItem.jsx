export const ProductItem = ({product}) => {
  const { _id, name, image, rating, numReviews, price, countInStock } = product;

  const handleAddItem = id => {
    console.log('Add item', id);
  }

  const handleRemoveItem = id => {
    console.log('Remove item ', id);
  }

  return (
    <div className="card">
      <img width="200" src={`http://localhost:5000/${image}`} alt={name} />
      <span className="reviews">{numReviews} <i class="fa-regular fa-eye"></i></span>
      <div className="card-info">
        <span className="title">{name}</span>
        <span>Price: ${price} MXN</span>
        <div className="details">
          <span>Stock: {countInStock}</span>
          <span>{rating} <i class="fa-regular fa-star"></i></span>
        </div>
        <button className="btn btn-blue" type="button" onClick={ () => handleAddItem(_id) }>
          Add item to cart
        </button>
        <button className="btn btn-red" type="button" onClick={ () => handleRemoveItem(_id) }>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  )
}
