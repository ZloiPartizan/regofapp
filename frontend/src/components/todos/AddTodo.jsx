import React from 'react'
import { useDispatch, useSelector} from 'react-redux'

import './AddTodo.css'
import SendIcon from '@mui/icons-material/Send'

import { addTodo, updateTodo } from '../../store/actions/todoActions'


const AddTodo = ({ todo, setTodo }) => {
    const auth = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();

        if (todo._id) {
            const id = todo._id;
            const updatedTodo = {
                name: todo.name,
                isComplete: todo.isComplete,
                date: todo.date,
                author: todo.author,
                uid: todo.uid,
            }

            dispatch(updateTodo(updatedTodo, id));

        } else {
            const newTodo = {
                ...todo,
                date: new Date()
            }

            dispatch(addTodo(newTodo));
        }
        setTodo({ name: '', isComplete: false });
    }

    return (

        <div id="content" className="mui-container-fluid">
            <div className="mui-row">
                <div className="mui-col-sm-10 mui-col-sm-offset-1">
                    <br />
                    <br />
                    <div className="mui--text-black-54 mui--text-body2">Создать заявку</div>
                    <div className="mui-divider"></div>

                    <br />

                    <form className="mui-form" id="form" onSubmit={handleSubmit}>

                        <div className="mui-textfield mui-textfield--float-label">
                            <input type="text"
                                id="enter-todo-name"
                                required minLength="10"
                                maxLength="256" disabled />
                            <label htmlFor="question-input">{auth.name}</label>
                        </div>

                        <div className="mui-textfield mui-textfield--float-label">
                            <textarea id="enter-todo"
                                minLength="1"
                                maxLength="256"
                                value={todo.name}
                                onChange={(e) => setTodo({ ...todo, name: e.target.value })}>
                            </textarea>
                            <label htmlFor="enter-todo-input">Текст заявки</label>
                        </div>

                        <button
                            type="submit"
                            variant="contained"
                            className="mui-btn mui-btn--raised mui-btn--primary"
                            id="sendBtn">
                            Отправить  <SendIcon className='sendIcon' />
                        </button>

                    </form>
                </div>
            </div>
        </div>

    )
}

export default AddTodo