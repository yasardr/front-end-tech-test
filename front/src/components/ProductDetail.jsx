export const ProductDetail = ({product}) => {

    const { _id, brand, category, countInStock, description, image, name, numReviews, price, rating } = product;

    return (
        <div className="details">
            <div className="image">
                <img src={`http://localhost:5000/${image}`} alt={name} />
            </div>
            <span className="title">{name}</span>
            <p>{description}</p>
            <div className="info">
                <span className="category">{category}</span>
                <span>Price: ${price} USD</span>
            </div>
            <div className="extra">  
                <span className="reviews">{numReviews} <i className="fa-regular fa-eye"></i></span>
                <span>{rating} <i className="fa-regular fa-star"></i></span>
            </div>
            {/* <div className="actions">
                <button className={`btn btn-blue ${stock === 0 ? 'inactive' : 'active'}`} type="button" onClick={ () => handleAddProduct(_id) }>
                    Add item to cart
                </button>
                <button className="btn btn-red" type="button" onClick={ () => handleRemoveProduct(_id) }>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div> */}
        </div>
    )
}