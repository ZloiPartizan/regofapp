
import { toast } from "react-toastify"

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_TODOS":
      return action.todos.data
    case "ADD_TODO":
      toast.info("Заявка добавлена...", {
        position: toast.POSITION.BOTTOM_RIGHT
      })
      return [action.todo.data, ...state]
    case "UPDATE_TODO":
      toast.info("Заявка отредакирована...", {
        position: toast.POSITION.BOTTOM_RIGHT
      })
      return state.map((todo) =>
        todo._id === action.todo.data._id ? action.todo.data : todo
      )
    case "CHECK_TODO":
      toast.success("Статус заявки был обновлён...", {
        position: toast.POSITION.BOTTOM_RIGHT
      })
      return state.map((todo) =>
        todo._id === action.todo.data._id ? action.todo.data : todo
      )
      case "DELETE_TODO":
      toast.error("Заявка удалена...", {
        position: toast.POSITION.BOTTOM_RIGHT
      })
      return state.filter((todo) =>
        todo._id !== action.id
      )
    default:
      return state
  }
}

export default todoReducer