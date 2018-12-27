export const actions = {
  CONF_TOGGLE: 'CONF_TOGGLE',
  READ_TOGGLE: 'READ_TOGGLE',
}
let nextTodoId = 0
export const addTodo = (text: string) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})
