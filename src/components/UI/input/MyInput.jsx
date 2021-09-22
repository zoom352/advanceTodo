import s from './MyInput.module.css'
import React from 'react';

const MyInput = React.forwardRef((props, ref) => {

    return (
        <input ref={ref} className={s.myInput} {...props}/>
    );
});


export default MyInput;