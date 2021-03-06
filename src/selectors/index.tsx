import { createSelector } from 'reselect'

const getVisibilityFilter = (state: any) => state.visibilityFilter
const getTodos = (state: any) => state.todos

export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case 'SHOW_ALL':
        return todos
      case 'SHOW_COMPLETED':
        return todos.filter((t: any) => t.completed)
      case 'SHOW_ACTIVE':
        return todos.filter((t: any) => !t.completed)
    }
  }
)