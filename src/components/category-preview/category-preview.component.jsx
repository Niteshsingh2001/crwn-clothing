import React from 'react'
import "./category-preview.style.scss"
import ProductCard from '../product-card/product-card.component'
import { Link } from 'react-router-dom'
export default function CategoryPreview({ title, products }) {
    return (
        <div className='category-preview-container'>
            <h2>
                <Link className='title' to={title} >{title.toUpperCase()}</Link>
            </h2>
            <div className='preview'>
                {products
                    .filter((_, idx) => idx < 4)
                    .map((product) => <ProductCard key={product.key} product={product} />)
                }
            </div>
        </div>
    )
}
