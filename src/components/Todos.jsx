import React from 'react';
import Todo from './Todo';

const Todos = () => {
    const todos = [
        {
            text: "Belajar React"
        },
        {
            text: "Belajar props di react"
        },
        {
            text: "Belajar React hooks"
        },
        {
            text: "Belajar State"
        },
        {
            text: "Belajar semuanya"
        },
        {
            text: "Belajar React"
        },
        {
            text: "Belajar props di react"
        },
        {
            text: "Belajar React hooks"
        },
        {
            text: "Belajar State"
        },
        {
            text: "Belajar semuanya"
        }
    ]

    return(
        <section className="todos">
            {todos.map(todo => {
                return <Todo text ={todo.text} />
            })}
        </section>
    )
}

export default Todos;