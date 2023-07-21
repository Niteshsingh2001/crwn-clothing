import "./directory-item.style.jsx"


import React from 'react'
import { DirectoryItemComtainer, BackgroundImage, Body } from "./directory-item.style.jsx"

export default function DirectoryItem({ category: { imageUrl, title } }) {


    return (
        <DirectoryItemComtainer to={"/shop/" + title}>
            <BackgroundImage imageUrl={imageUrl} />
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemComtainer>
    )
}
