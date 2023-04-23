function PopupWithForm(props) {
    return (
        <div className={`popup popup_${props.name} ${props.isOpen ? 'popup_open' : ''}`}>
            <div className="popup__container">
                <h2 className="popup__title">{props.title}</h2>
                <form className="popup__form popup__form_type_profile" name={props.name} noValidate>
                    <div className="popup__field">
                        {props.children}
                        <button className="popup__button-save" type="submit">Сохранить</button>
                    </div>
                </form>
                <button className="popup__button-close" type="button" onClick={props.onClose}></button>
            </div>
        </div>
    )
}

export default PopupWithForm