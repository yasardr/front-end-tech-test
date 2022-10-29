import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProducts } from '../hooks/useGetProducts';
import { ProductDetail } from './ProductDetail';



export const ProductDisplayPage = () => {

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { products } = useGetProducts();

  useEffect(() => {
    if (products.length > 0) {
      const result = products.filter(product => product._id === id);
      if (result.length > 0) {
        setProduct(result[0]);
      }
    }
  }, [products]);
  

  return (
    <div className="container-detail">
      {
        product  && 
          <ProductDetail product={product} />
      }
    </div>
  )
}
