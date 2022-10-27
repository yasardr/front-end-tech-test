import { useEffect, useState } from "react";
import { productsApi } from "../api/productsApi";
import { ProductItem } from "./ProductItem";

export const ProductListPage = () => {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const { data } = await productsApi.get('/products');
        setProducts(data);
        console.log(data);
    }

    useEffect(() => {
      getProducts();
    }, [])
    

    return (
        <div className="container-products">
            {
                products.map(product => (
                    <ProductItem key={product._id} product={product} />
                ))
            }
        </div>
    )
}
