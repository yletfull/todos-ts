import React, { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypeSelector } from '../../hooks/useTypeSelector';

function TodosList(){
    const {
        todos,
        error,
        isFetching,
        page,
        limit
    } = useTypeSelector((state) => state.todo)

    const {
        fetchTodos,
    } = useActions();

    useEffect(() => {
        fetchTodos({
            page,
            limit,
        });
    }, [page, limit])

    if(isFetching) {
        return (
            <h1>
                Идет загрузка...
            </h1>
        )
    }

    if(error) {
        return (
            <h1>
                {error}
            </h1>
        )
    }

    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id}>
                    {todo.name}
                </div>
            ))}
        </div>
    )
}

export default TodosList;