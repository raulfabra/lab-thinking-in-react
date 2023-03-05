import { useState } from "react";

function ProductRow({products}) {
    
    const [soldOut, setSoldout] = useState(false)

    return (
        <tbody>
        {products.map(product => {
            return (
            <tr key={product.id}>
            {!product.inStock && <td style = {{color:"red"}}>{product.name}</td>}
            {product.inStock && <td>{product.name}</td>}    
                <td>{product.price}</td>
            </tr>
            )
        })}
        </tbody>
    )
    }

export default ProductRow;