/**
 * mutations
 */
import {ADD_TODO, REMOVEITEM, SELECTALLTODOS, REMOVECOMPLETETODOS, REQTODOS} from './mutation-types'
export default{
  [ADD_TODO] (state, {todo}){
    state.todos.unshift(todo)
  },
  [REMOVEITEM](state, {index}){
    state.todos.splice(index, 1)
  },
  [SELECTALLTODOS](state, {check}){
    state.todos.forEach(todo => todo.complete = check)
  },
  [REMOVECOMPLETETODOS](state){
    state.todos = state.todos.filter(todo => todo = !todo.complete)
  },
  [REQTODOS](state, todos){
    state.todos = todos
  }
}
