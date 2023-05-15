import React from 'react'
import PopupWithForm from './PopupWithForm'

function AddPlacePopup(props) {
    const [name, setName] = React.useState('')
    const [url, setLink] = React.useState('')

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleLinkChange(e) {
        setLink(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.onAddPlace({
            name: name,
            link: url,
        })
    }

    return (
        <PopupWithForm
            name='card-form'
            title='Новое место'
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            buttonText='Создать'
        >
            <div className="popup__field">
                <input type="text" name="name" id="place-input"
                       className="popup__input popup__input_type_name-link"
                       placeholder="Название" minLength="2" maxLength="30" required onChange={handleNameChange}/>
                <span className="popup__input-error place-input-error"></span>
            </div>
            <div className="popup__field">
                <input type="url" name="link" id="url-input" className="popup__input popup__input_type_link"
                       placeholder="Ссылка на картинку" required onChange={handleLinkChange}/>
                <span className="popup__input-error url-input-error"></span>
            </div>
        </PopupWithForm>
    )
}

export default AddPlacePopup