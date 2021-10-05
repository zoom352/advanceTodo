import s from './myButton.module.css'

const MyButton = ({children, addNewPost, ...props}) => {

    return (
        <button onClick={addNewPost} className={s.myBtn}>
            {children}
        </button>
        
    )
}

export default MyButton;