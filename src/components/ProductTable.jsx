import ProductRow from "./ProductRow";

function ProductTable({products}) {

    return (
        <table className="table w-75 mx-auto mt-5">
            <thead className="table-light">
                <tr className="">
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <ProductRow products={products}/>
        </table>
    )
}


export default ProductTable;