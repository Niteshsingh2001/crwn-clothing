import DirectoryItem from "../directory-item/directory-item.component"
import "./directory.style.scss"

export default function Directory({ categories }) {
    return (
        <div className="categories-container">
            {categories.map((category) => {
                return (
                    <DirectoryItem category={category} key={category.id} />
                )
            })}
        </div>
    )
}
