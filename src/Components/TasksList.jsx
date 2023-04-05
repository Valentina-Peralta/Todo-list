import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import Task from "./Task";
import '../Stylesheets/TasksList.css'
import TodoFilters from "./TodoFilters";

function TasksList({ theme }) {

    const [tasks, setTasks] = useState([{
        id: 1,
        text: 'Complete online JavaScript course',
        completed: true,
        priority: 'low'
    },
    {
        id: 2,
        text: 'Jog around the park 3x',
        completed: false,
        priority: 'high'

    },
    {
        id: 3,
        text: '10 minutes meditation',
        completed: false,
        priority: 'low'

    },
    {
        id: 4,
        text: 'Read for 1 hour',
        completed: false,
        priority: 'low'

    },
    {
        id: 5,
        text: 'Pick up groceries',
        completed: false,
        priority: 'low'

    },
    {
        id: 6,
        text: 'Complete Todo App on Frontend Mentor',
        completed: false,
        priority: 'low'

    }
    ])

    //tasks: visible tasks
    //allTasks: active+completed
    const [allTasks, setAllTasks] = useState(tasks)
    const [itemsLeft, setItemsLeft] = useState('5')
    const [filter, setFilter] = useState('all')
    const [inputValue, setInputValue] = useState()

    const addTask = task => {
        if (task.text.trim()) {
            task.text = task.text.trim()
            task.priority = (newTaskPriority === true ? 'low' : 'high')
            const newAllTasks = [task, ...allTasks]
            const newTasks = [task, ...tasks]

            setTasks(newTasks)
            setAllTasks(newAllTasks)

        }

/*         setInputValue('')
 */    }


    useEffect(() => {
        const activeTasks = allTasks.filter(task => task.completed === false)
        setItemsLeft(activeTasks.length)

    }, [allTasks]);


    const deleteTask = id => {
        const notDeletedTask = allTasks.filter(task => task.id !== id)
        setAllTasks(notDeletedTask);

        if (filter === 'all') {
            setTasks(notDeletedTask)
            const activeTasks = tasks.filter(task => task.completed === false)
            setItemsLeft(activeTasks.length)
        }
        if (filter === 'active') {
            setTasks(notDeletedTask.filter(task => task.completed === false))
        }
        if (filter === 'completed') {
            setTasks(notDeletedTask.filter(task => task.completed === true))
        }
        const activeTasks = notDeletedTask.filter(task => task.completed === false)
        setItemsLeft(activeTasks.length)
    }

    const completeTask = id => {
        const newTasks = tasks.map(task => {
            if (task.id === id) {
                task.completed = !task.completed;
            }
            return task
        })
        setTasks(newTasks)
        const activeTasks = allTasks.filter(task => task.completed === false)
        const notActiveTasks = tasks.filter(task => task.completed === true)
        setItemsLeft(activeTasks.length)
        if (filter === 'active') {
            setTasks(activeTasks)
        }
        if (filter === 'completed') {
            setTasks(notActiveTasks)
        }
    }

    const filterCompleted = () => {
        const completedTasks = allTasks.filter(task => task.completed === true);
        setTasks(completedTasks)
        setFilter('completed')
        const activeTasks = allTasks.filter(task => task.completed === false)
        setItemsLeft(activeTasks.length)
    }

    const filterActive = () => {
        const activeTasks = allTasks.filter(task => task.completed === false)
        setItemsLeft(activeTasks.length)
        setTasks(activeTasks)
        setFilter('active')
    }

    const filterAll = () => {
        setTasks(allTasks)
        setFilter('all')
        const activeTasks = allTasks.filter(task => task.completed === false)
        setItemsLeft(activeTasks.length)
    }

    const clearCompleted = () => {
        const activeTasks = tasks.filter(task => task.completed === false)
        const allActiveTasks = allTasks.filter(task => task.completed === false)
        setTasks(activeTasks)
        setAllTasks(allActiveTasks)
    }

    const setPriority = (id) => {
        const importantTasks = tasks.map(task => {
            if (task.id == id) {
                task.priority = (task.priority === 'low' ? 'high' : 'low');
            }
            return task
        })
        setTasks(importantTasks)
/*         setAllTasks(importantTasks)
 */    }
    const [newTaskPriority, setNewTaskPriority] = useState(true)
    const setTaskPriority = () => {

        setNewTaskPriority(newTaskPriority === false ? true : false)
    }

    return (
        <>
            <TodoForm
                theme={theme}
                onSubmit={addTask}
                setHighPriority={setTaskPriority}
                priorityHigh={newTaskPriority}
                value={inputValue} />

            <div className={theme === 'light' ? 'tasks-container' : 'tasks-container-dark'} >
                {
                    tasks.map((task) =>
                        <Task
                            key={task.id}
                            id={task.id}
                            text={task.text}
                            completed={task.completed}
                            deleteTask={deleteTask}
                            completeTask={completeTask}
                            theme={theme}
                            setPriorityButton={setPriority}
                            priority={task.priority}

                        />
                    )
                }
                <div className='items-left-container'>
                    <p>{itemsLeft} items left</p>
                    <p className='clear-completed'
                        onClick={clearCompleted}
                    >Clear Completed</p>
                </div>
            </div>
            <TodoFilters
                theme={theme}
                filterCompleted={filterCompleted}
                filterActive={filterActive}
                filterAll={filterAll}
                filter={filter}
            />
        </>
    )
}

export default TasksList