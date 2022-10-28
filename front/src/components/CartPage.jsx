import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ProductListItem } from './ProductListItem';

export const CartPage = ({products}) => {

  const { cart, addProduct, removeProduct } = useContext( CartContext );
  
  console.log({cart});

  return (
    <>
      {
        cart.length === 0 
          ? <h1 className="message">No hay productos en el carrito</h1>
          : <div className='list-items'>
            {
              cart.map(p => {
                const product = products.filter(item => item._id === p.id);
                return <ProductListItem 
                        key={p.id} 
                        product={product[0]} 
                        addProduct={addProduct} 
                        removeProduct={removeProduct}
                        amount={p.amount} />;
              })
            }
            </div>
      }
    </>
  )
}
