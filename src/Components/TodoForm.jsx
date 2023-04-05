import React, { useState } from "react";
import '../Stylesheets/TodoForm.css';
import PriorityIcon from '../Img/icon-priority.svg';

let idCounter = 6;

function TodoForm({ theme, onSubmit, setHighPriority, priorityHigh, value }) {

    const [input, setInput] = useState('')

    const onChangeInput = (e) => {
        setInput(e.target.value);
    }
    const onSubmitForm = e => {
        e.preventDefault();
        ++idCounter


        const newTask = {
            id: idCounter,
            text: input,
            completed: false
        }
        onSubmit(newTask);

    }

    return (
        <form className='todoForm'
            onSubmit={onSubmitForm} >
            <input className={theme === 'light' ? 'new-todo-input' : 'new-todo-input-dark'} type='text'
                placeholder='Create a new todo...'
                onChange={onChangeInput}
                value={value}
            />
            <div className='icon-priority-container'>
                {priorityHigh === true ? <svg
                    onClick={setHighPriority}

                    className='priority-icon'
                    xmlns="http://www.w3.org/2000/svg"
                    height="24" viewBox="0 96 960 960"
                    width="24"><path fill="#9394a5"
                        opacity='30%'
                        d="M479.964 948.913q-36.073 0-61.725-25.688t-25.652-61.761q0-36.073 25.688-61.725t61.761-25.652q36.073 0 61.725 25.688t25.652 61.761q0 36.073-25.688 61.725t-61.761 25.652Zm-83.551-254.826V205h167.174v489.087H396.413Z" /></svg>
                    : <svg
                        onClick={setHighPriority}

                        className='priority-icon'
                        xmlns="http://www.w3.org/2000/svg"
                        height="24" viewBox="0 96 960 960"
                        width="24"><path fill="#c058f3"
                            d="M479.964 948.913q-36.073 0-61.725-25.688t-25.652-61.761q0-36.073 25.688-61.725t61.761-25.652q36.073 0 61.725 25.688t25.652 61.761q0 36.073-25.688 61.725t-61.761 25.652Zm-83.551-254.826V205h167.174v489.087H396.413Z" /></svg>}
                <span className='hover-message'>Change priority</span>
            </div>
            <button className='new-todo-button'
                type='submit'

            ><svg xmlns="http://www.w3.org/2000/svg" height="38" viewBox="0 96 960 960" width="38"><path fill='#3a7bfd' d="M450 856V606H200v-60h250V296h60v250h250v60H510v250h-60Z" /></svg></button>
        </form>

    )
}

export default TodoForm;