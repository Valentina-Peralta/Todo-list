import React, { useState } from "react";

import '../Stylesheets/Task.css'
function Task({ id, text, completed, completeTask, deleteTask, theme, setPriorityButton, priority }) {

    return (
        <div className={completed ? 'task-container complete' : 'task-container'}>
            <div className='task-text-container'
                onClick={() => completeTask(id)}
            >
                <div className={completed ? 'check-container-complete' : 'check-container'}>
                    {completed ? <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6" /></svg> : null}
                </div>
                <p className='task-text'>{text}</p>
            </div>
            <div className='task-options'>
                <div className='task-priority'
                    onClick={() => setPriorityButton(id)}
                >
                    {priority === 'low' ? <svg className='low-priority-icon' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path fill="#9394a5" opacity='30%' d="M479.964 948.913q-36.073 0-61.725-25.688t-25.652-61.761q0-36.073 25.688-61.725t61.761-25.652q36.073 0 61.725 25.688t25.652 61.761q0 36.073-25.688 61.725t-61.761 25.652Zm-83.551-254.826V205h167.174v489.087H396.413Z" /></svg> : <svg className='high-priority-icon' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path fill="#c058f3" d="M479.964 948.913q-36.073 0-61.725-25.688t-25.652-61.761q0-36.073 25.688-61.725t61.761-25.652q36.073 0 61.725 25.688t25.652 61.761q0 36.073-25.688 61.725t-61.761 25.652Zm-83.551-254.826V205h167.174v489.087H396.413Z" /></svg>}
                </div>
                <div className='task-delete'
                    onClick={() => deleteTask(id)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" /></svg>
                </div>
            </div>

        </div>

    )
}

export default Task;