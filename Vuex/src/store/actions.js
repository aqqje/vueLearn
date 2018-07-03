/**
 * actions
 */
import {ADD_TODO, REMOVEITEM, SELECTALLTODOS, REMOVECOMPLETETODOS, REQTODOS} from './mutation-types'
import storageUtil from '../utils/storageUtil'
export default{
  add_todo({commit}, todo){
    commit(ADD_TODO, {todo})
  },
  removeItem({commit}, index){
    commit(REMOVEITEM, {index})
  },
  selectAllTodos({commit}, check){
    commit(SELECTALLTODOS, {check})
  },
  removeCompleteTodos({commit}){
    commit(REMOVECOMPLETETODOS)
  },
  reqTodos({commit}){
   setTimeout(() => {
     const todos = storageUtil.readTodos()
     commit(REQTODOS, todos)
   },1000)
  }
}
