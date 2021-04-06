import { Link } from 'react-router-dom';
import { useState } from 'react';
import React from 'react'

const ListProducts = () => {
    const [product, setProductList] = useState(() => {
        const initalProductList = {
            data: [
                {
                    id: 1,
                    name: 'Sony'
                },
                {
                    id: 2,
                    name: 'Samsung',
                    sale: 50
                },
                {
                    id: 3,
                    name: 'Apple'
                },
            ]
        };
        return initalProductList;
    });
    const productList = product.data.length > 0 && product.data.map(item => {
        return (<li key={item.id}>
            <Link to={{
                pathname: `/product/${item.id}`,
                state: item, search: `${item.sale ? `?deal=${item.sale}` : ''}`
            }}
                className="navLink">{item.name}
            </Link>
        </li>)
    });
    return (
        <div className="App" style={{ textAlign: 'center' }}>
            <p>List Products</p>
            <ul style={{ listStyle: 'none' }}>
                {productList}
            </ul>
        </div>
    )
}

export default ListProducts;