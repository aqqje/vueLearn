/*
* localStorage 工具
* */
const TODOS = 'todos_key'
export default {
  saveTodos(todos){
    window.localStorage.setItem(TODOS, JSON.stringify(value))
  },
  readTodos(){
    return JSON.parse(window.localStorage.getItem(TODOS) || '[]')
  }
}
