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
      <span className="title">{name}</span>
      <span>{rating} <i className="fa-solid fa-star"></i></span>
      <span>{numReviews} <i className="fa-solid fa-eye"></i></span>
      <span>${price} MXN</span>
      <span>Stock: {countInStock}</span>
      <button type="button" onClick={ () => handleAddItem(_id) }>
        Add item to cart
      </button>
      <button type="button" onClick={ () => handleRemoveItem(_id) }>
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  )
}
