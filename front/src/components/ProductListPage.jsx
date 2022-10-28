import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ProductItem } from './ProductItem';

export const ProductListPage = ({products, isLoading}) => {

    const { cart, addProduct, removeProduct } = useContext( CartContext );
    
    return (
        <div className="container-products">
            {
                isLoading
                ? <span className='message'>Cargando...</span>
                :   products.map(product => (
                        <ProductItem 
                            key={product._id} 
                            cart={cart}
                            product={product} 
                            addProduct={addProduct} 
                            removeProduct={removeProduct} />
                    ))
            }
        </div>
    )
}
