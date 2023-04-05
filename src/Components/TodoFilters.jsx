import React from "react";
import '../Stylesheets/TodoFilters.css'

function TodoFilters({ theme, filterAll, filterActive, filterCompleted, filter }) {
    return (
        <div className={theme === 'light' ? 'todoFilters' : 'todoFilters-dark'}>
            <p className={filter === 'all' ? 'showingAll' : 'all'}
                onClick={filterAll}
            >All</p>
            <p className={filter === 'active' ? 'showingActive' : 'active'}
                onClick={filterActive}
            >Active</p>
            <p className={filter === 'completed' ? 'showingCompleted' : 'completed'}
                onClick={filterCompleted}

            >Completed</p>

        </div>
    );
}

export default TodoFilters