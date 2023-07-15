import React from 'react'
import messangerStyle from './Messanger.module.css';
import MessangerItem from './MessangerItem/MessangerItem';
import MessangerText from './MessangerText/MessangerText';
import {addMessageCreator} from '../../redux/MessangerPageReducer';
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";



<div>
    <MessangerItem />
    <MessangerText />
</div>

//const addMessageReact = React.createRef()
const Messanger = (props) => {
    const dispatch = useDispatch(); // Используется для получения функции диспатч Redux

    const {register, handleSubmit, reset, formState:{errors} } = useForm() // Этот хук позволяет управлять сосотяние формы и обрабатывать ее отправку

        // register регистрирует поле ввода формы и связывает его со значением валидации
        // handleSubmit обрабатывает отправку формы и вызывает определнную функцию обратного вызова для успешной валидации
    const onSendMessageClick = (data) => {
        dispatch(addMessageCreator(data.message));
        reset ()
    }
// Функция обработчика события отправки формы. Когда форма отправляется, функция вызывается. Она принимает объект data, который содержит значения полей формы.
// Внутри этой функции мы диспатчим действия addMessageCreator, передвая ему значение data.message - сообщение из поля ввода

    // const newMessageBody = useSelector((state)=>state.MessangerPage.newMessageBody)


    const NewMessangerItemArray = props.MessangerPage.MessangerItemArray.map(item => <MessangerItem name={item.name} id={item.id} />) // Просто пробегаемся по массиву объектов, обращаясь каждому элкменту массива через map и отображая его в jsx размете
    const NewMessangerTextArray = props.MessangerPage.MessangerTextArray.map(item => <MessangerText className={messangerStyle.text} text={item.text} />)
    return (
        <div className={messangerStyle.messanger}>
            <div className={messangerStyle.messanger_items}>

                {NewMessangerItemArray}
            </div>
            <div className={messangerStyle.messages}>
                <div>{NewMessangerTextArray}</div>
                <form onSubmit={handleSubmit(onSendMessageClick)}>
                    <div>
                        <input type="text"
                                {...register('message',
                                    {required:'Введите сообщение',
                                            maxLength:{
                                            value:20,
                                            message: "Сообщение не может содержать более 20 символов"}
                                    }
                                    )}
                               placeholder='Введите сообщение' className={errors.message ? messangerStyle.inputError : undefined} /> {errors.message && (
                                    <p className={messangerStyle.errorMessage}>{errors.message.message}</p>
                        )
                    }
                    </div>
                    <div>
                        <button type="submit" disabled={Object.keys(errors).length > 0}>Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Messanger;