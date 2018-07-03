/*
* getters
* */

export default ({
  // 总数量
  totalCount(state){
    return state.todos.length
  },
  // 完成的总数量
  completeCount(state){
    return state.todos.reduce((preTotal, todo) => preTotal + (todo.complete?1:0), 0)
  },
  isAllSelect(state, getters){
    return getters.totalCount === getters.completeCount &&getters.totalCount > 0
  }
})
