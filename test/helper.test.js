import { addTodo } from './helper'

describe('addTodo', () => {
    it('should add todo to the list', () => {
        const startTodos = [
            { id: 1, title: 'one', done: false },
            { id: 2, title: 'two', done: false }
        ]

        const newTodo = { id: 3, title: 'three', done: false }
        const expected = [
            { id: 3, title: 'three', done: false },
            { id: 1, title: 'one', done: false },
            { id: 2, title: 'two', done: false }
        ]
        const result = addTodo(startTodos, newTodo)
        expect(result).toEqual(expected)
    })

    it('should not mutate the existing todo array', () => {
        const startTodos = [
            { id: 1, title: 'one', done: false },
            { id: 2, title: 'two', done: false }
        ]

        const newTodo = { id: 3, title: 'three', done: false }

        const result = addTodo(startTodos, newTodo)

        expect(result).not.toBe(startTodos)
    })
})