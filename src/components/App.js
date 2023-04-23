import React from 'react'
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
    const [selectedCard, handleCardClick] = React.useState(null)

    function handleEditAvatarClick() {
        setEditAvatarPopupOpen(true)
    }

    function handleEditProfileClick() {
        setEditProfilePopupOpen(true)
    }

    function handleAddPlaceClick() {
        setAddPlacePopupOpen(true)
    }

    function closeAllPopups() {
        setEditAvatarPopupOpen(false)
        setEditProfilePopupOpen(false)
        setAddPlacePopupOpen(false)
        handleCardClick(null)
    }

    function onCardClick(card) {
        handleCardClick(card)
    }

    return (
        <div>
            < Header/>
            < Main
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick={onCardClick}/>
            < Footer/>
            <PopupWithForm
                name='profile-form'
                title='Редактировать профиль'
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
            >
                <input type="text" name="name" id="name-input"
                       className="popup__input popup__input_type_name"
                       placeholder="Имя" minLength="2" maxLength="40" required/>
                <span className="popup__input-error name-input-error"></span>
                <input type="text" name="job" id="job-input" className="popup__input popup__input_type_job"
                       placeholder="О себе" minLength="2" maxLength="200" required/>
                <span className="popup__input-error job-input-error"></span>
            </PopupWithForm>
            <PopupWithForm
                name='card-form'
                title='Новое место'
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
            >
                <input type="text" name="name" id="place-input"
                       className="popup__input popup__input_type_name-link"
                       placeholder="Название" minLength="2" maxLength="30" required/>
                <span className="popup__input-error place-input-error"></span>
                <input type="url" name="link" id="url-input" className="popup__input popup__input_type_link"
                       placeholder="Ссылка на картинку" required/>
                <span className="popup__input-error url-input-error"></span>
            </PopupWithForm>
            <PopupWithForm
                name='avatar-form'
                title='Обновить аватар'
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
            >
                <input type="url" name="avatar" id="avatar-input"
                       className="popup__input popup__input_type_avatar"
                       placeholder="Ссылка на картинку" required/>
                <span className="popup__input-error avatar-input-error"></span>
            </PopupWithForm>
            <PopupWithForm
                name='check-form'
                title='Вы уверены?'
            >
            </PopupWithForm>
            < ImagePopup
                card={selectedCard}
                onClose={closeAllPopups}
            />
        </div>
    );
}

export default App;

