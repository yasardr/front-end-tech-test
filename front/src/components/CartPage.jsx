import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useGetProducts } from '../hooks/useGetProducts';
import { ProductListItem } from './ProductListItem';

export const CartPage = () => {

  const { products, isLoading } = useGetProducts();
  const { cart, addProduct, removeProduct } = useContext( CartContext );

  return (
    <>
      {
        cart.length === 0 
          ? <h1 className="message">No hay productos en el carrito</h1>
          : <div className='list-items'>
            {
              isLoading
              ? <span className='message'>Cargando...</span>
              : cart.map(p => {
                const product = products.filter(item => item._id === p.id);
                return <ProductListItem 
                        key={p.id} 
                        product={product[0]} 
                        addProduct={addProduct} 
                        removeProduct={removeProduct}
                        _amount={p.amount} />;
              })
            }
            </div>
      }
    </>
  )
}
