import { useContext, useState, useEffect } from "react";
import "./category.style.scss"

import { useParams } from "react-router-dom";
// import { CategoriesContext } from "../../context/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/category/category.selector";

export default function Category() {
    const { category } = useParams()
    // const { categoriesMap } = useContext(CategoriesContext)
    const categoriesMap = useSelector(selectCategoriesMap)

    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <>
            <h2 className="category-title">{category.toUpperCase()}</h2>
            <div className="category-container">
                {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
        </>
    )
}
