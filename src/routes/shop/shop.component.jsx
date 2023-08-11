import { Route, Routes } from "react-router-dom";

import "./shop.style.scss"
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { useEffect } from "react";
import { setCategories } from "../../store/category/category.actiom";
import { selectCartItems } from "../../store/cart/cart.selector";

const Shop = () => {
    const dispatch = useDispatch();

    
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categorieArray = await getCategoriesAndDocuments('categories')
            console.log(categorieArray);
            dispatch(setCategories(categorieArray))
        }
        getCategoriesMap();

    }, [dispatch])



    return (
        <Routes>
            <Route index element={<CategoriesPreview />}></Route>
            <Route path=":category" element={<Category />} ></Route>
        </Routes>
    );
};
export default Shop;