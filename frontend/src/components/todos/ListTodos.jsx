import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Todo from './Todo'
import { getTodos } from '../../store/actions/todoActions'

const ListTodos = ({ setTodo }) => {

    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos)
    console.log(todos)

    useEffect(() => {
        dispatch(getTodos())
    }, [dispatch])

    return (
        <>
            <div id="content" className="mui-container-fluid">
                <div className="mui-row">
                    <div className="mui-col-sm-10 mui-col-sm-offset-1">

                        <div className="mui--text-headline">
                            <br />
                            {todos.length > 0 ? 'Отправленные заявки' : 'Список заявок пуст'}</div>
                        <div className="mui-divider"></div>
                        <br />
                        <div>
                            <Link to='/signup'
                                className="mui--text-caption regLink"
                                >
                                Регистрация нового пользователя
                            </Link>
                        </div>
                        <br />
                        {todos && todos.map((todo) => {
                            return (
                                <Todo
                                    todo={todo}
                                    key={todo._id}
                                    setTodo={setTodo}
                                />
                            )
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}

export default ListTodos