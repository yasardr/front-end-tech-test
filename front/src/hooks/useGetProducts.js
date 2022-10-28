import { useEffect, useState } from 'react';
import { productsApi } from '../api/productsApi';

export const useGetProducts = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getProducts = async () => {
        const { data } = await productsApi.get('/products');
        setProducts(data);
        setIsLoading(false);
        console.log({data});
    }

    useEffect(() => {
        getProducts();
    }, []);

    return {
        products,
        isLoading
    }
}


