import React, { useState } from 'react'
import './Simple.css'
export default function Simple() {

    const [initialTodosList, setInitialTodolist] = useState([
        { id: 1, title: 'Book the ticket for today evening' },
        { id: 2, title: 'Rent the movie for tomorrow movie night' },
        { id: 3, title: 'Confirm the slot for the yoga session tomorrow morning' },
        { id: 4, title: 'Drop the parcel at Bloomingdale' },
        { id: 5, title: 'Order fruits on Big Basket' },
        { id: 6, title: 'Fix the production issue' },
        { id: 7, title: 'Confirm my slot for Saturday Night' },
        { id: 8, title: 'Get essentials for Sunday car wash' }
    ]);

    const handleDelete = (id) => {
        const singleDelete = initialTodosList.filter((todo) => todo.id !== id);
        setInitialTodolist(singleDelete)
    };

    return (
        <div className='simpleContainer'>
            <div className='simpletodosparent'>
                <h1 className='title'>Simple Todos</h1>
                {initialTodosList.map((eachfilter, index) => {
                    return (
                        <ul key={index} className='simpeitems'>
                            <li>{eachfilter.title}</li>
                            <li>
                                <button onClick={() => handleDelete(eachfilter.id)} className='buttdet'>Delete</button>
                            </li>
                        </ul>
                    )
                })}
            </div>
        </div>
    )
}
