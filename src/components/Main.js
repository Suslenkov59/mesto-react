import React from 'react'
import {api} from './utils/Api'
import Card from "./Card";

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
    const [userName, setUserName] = React.useState('')
    const [userDescription, setUserDescription] = React.useState('')
    const [userAvatar, setUserAvatar] = React.useState('')
    const [cards, setCards] = React.useState([])

    React.useEffect(() => {
        api.getUserInfo().then((data) => {
            setUserName(data.name)
            setUserDescription(data.about)
            setUserAvatar(data.avatar)
        })
    }, [])

    React.useEffect(() => {
        api.getInitialCards()
            .then((data) => {
                setCards(data)
            })
    }, [])
    return (<main className="main">
        <section className="profile">
            <img className="profile__avatar" alt="аватарка" src={userAvatar}/>
            <button className="profile__avatar-button" type="button" onClick={onEditAvatar}></button>
            <div className="profile__info">
                <h1 className="profile__info-name">{userName}</h1>
                <p className="profile__info-description">{userDescription}</p>
                <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
            </div>
            <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
        </section>
        <section className="elements">
            <ul className="elements__container">
                {cards.map((card) => <Card key={card._id}
                                           card={card}
                                           onCardClick={onCardClick}
                />)}
            </ul>
        </section>
    </main>)
}

export default Main