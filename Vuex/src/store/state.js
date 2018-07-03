/**
 * state
 */
import storageUtil from '../utils/storageUtil'
export default {
  todos: storageUtil.readTodos()
}
