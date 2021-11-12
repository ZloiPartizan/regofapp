import React from 'react'
import { useDispatch } from 'react-redux'

import { Create, Delete, CheckCircle } from '@mui/icons-material'
import { ButtonGroup, Button, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import moment from 'moment'
import 'moment/locale/ru' 


import { cheсkTodo, deleteTodo } from '../../store/actions/todoActions'

const useStyles = makeStyles({
    todoStyle: {
        margin: "20px auto",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between"
    },
    grayStyle: {
        color: "#8f8f8f",
    },
    isComplete: {
        color: "green",
    },
    checked: {
        textDecoration: "line-through",
    },
})

const Todo = ({ todo, setTodo }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const handleUpdateClick = () => {
        setTodo(todo)

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    const handleCheck = (id) => {
        dispatch(cheсkTodo(id))
      }

      const handleDelete = (id) => {
        dispatch(deleteTodo(id))
      }

    return (
        <div className="mui-panel">
            <div className={classes.todoStyle}>
                <div>
                    {todo.isComplete ? (
                        <Typography variant="subtitle1" className={classes.checked}>
                            {todo.name}
                        </Typography>
                    ) : (
                        <Typography variant="subtitle1">{todo.name}</Typography>
                    )}
                    <Typography variant="body2" className={classes.moreStyle}>
                        Автор: {todo.author}
                    </Typography>
                    <Typography variant="body2" className={classes.moreStyle}>
                        Добавлено: {moment(todo.date).fromNow()}
                    </Typography>
                </div>
                        
                <div>
                    <ButtonGroup>
                        <Button onClick = {() => handleCheck(todo._id)}>
                            {todo.isComplete ? (
                                <CheckCircle color='success' className={classes.isComplete} />
                            ) : (
                                <CheckCircle color='action' />
                            )}
                        </Button>
                        <Button onClick={() => handleUpdateClick()}>
                            <Create />
                        </Button>
                        <Button onClick={() => handleDelete(todo._id)}>
                            <Delete color='error' />
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
        </div>
    )
}

export default Todo