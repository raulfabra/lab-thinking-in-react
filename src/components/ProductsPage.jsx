import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage() {
    const [products, setProducts] = useState(jsonData);

    const searchProducts = (text) => {
        setProducts(products.filter(product => {
           return product.name.toLowerCase().includes(text.toLowerCase())
        }))
    }

    return (
        <div>
            <h1 className="bg-primary">IronStore</h1>
            <SearchBar searchProducts = {searchProducts}/>
            <ProductTable products={products}/>
        </div>
    )
}

export default ProductsPage;