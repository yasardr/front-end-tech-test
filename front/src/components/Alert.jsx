export const Alert = ({onCloseAlert, title, message, icon, color}) => {
    return (
        <div className="container-alert">
            <div className="alert">
                <div className="action">
                    <button onClick={ onCloseAlert } className="close-alert"><i className="fa-solid fa-xmark"></i></button>
                </div>
                <span className="icon" style={{color}}>
                    <i className={icon}></i>
                </span>
                <h3>{title}</h3>
                <p>{message}</p>
            </div>
        </div>
    )
}
