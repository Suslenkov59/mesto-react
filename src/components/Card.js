function Card(props) {
    function handleClick() {
        props.onCardClick(props.card)
    }

    return (
        <div className="element">
            <button className="element__delete-button" type="button"></button>
            <img className="element__image" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
            <div className="element__description">
                <h2 className="element__name">{props.card.name}</h2>
                <div className="element__like-area">
                    <button className="element__like" type="button"></button>
                    <p className="element__like-counter">{props.card.likes.length}</p>
                </div>
            </div>
        </div>
    )
}

export default Card