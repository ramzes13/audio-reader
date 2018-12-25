export const actions = {
  CONF_TOGLE: 'CONF_TOGLE',
  READ_TOGLE: 'READ_TOGLE',
}
let nextTodoId = 0
export const addTodo = (text: string) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})
