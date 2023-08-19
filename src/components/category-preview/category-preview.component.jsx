import React from 'react'
import "./category-preview.style.scss"
import ProductCard from '../product-card/product-card.component'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCategoriesIsLoading } from '../../store/category/category.selector'
import Spinner from '../spinner/spinner.component'
export default function CategoryPreview({ title, products }) {

    const isLoading = useSelector(selectCategoriesIsLoading)
    return (
        <div className='category-preview-container'>
            {
                isLoading ? <Spinner /> :
                    (
                        <>
                            <h2>
                                <Link className='title' to={title} >{title.toUpperCase()}</Link>
                            </h2>
                            <div className='preview'>
                                {products
                                    .filter((_, idx) => idx < 4)
                                    .map((product) => <ProductCard key={product.key} product={product} />)
                                }
                            </div>
                        </>
                    )
            }
        </div>
    )
}
