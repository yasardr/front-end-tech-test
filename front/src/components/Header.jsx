export const Header = () => {
  return (
    <div className="nav">
        <ul>
            <li>
                <a href="#">Products</a>
            </li>
            <li>
                <a href="#">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span> Carrito (0)</span>
                </a>
            </li>
        </ul>
    </div>
  )
}
