import { Link } from "react-router-dom"

export const Header = ({count}) => {
  return (
    <div className="nav">
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/cart">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span> Carrito ({count})</span>
                </Link>
            </li>
        </ul>
    </div>
  )
}
