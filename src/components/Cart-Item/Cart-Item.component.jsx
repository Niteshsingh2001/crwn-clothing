import "./Cart-Item.style.scss"

export default function CardItem({ CardItems }) {
    // console.log(CardItems)

    const { name, imageUrl, price, quantity } = CardItems

    return (
        <div className="cart-item-container">

            <img src={imageUrl} alt={name} />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{quantity} * {price}</span>
            </div>
        </div>
    )
}
