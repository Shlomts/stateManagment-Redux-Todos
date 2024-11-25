const { useEffect, useState } = React
const { useSelector, useDispatch } = ReactRedux

import {Chart} from '../cmps/Chart.jsx'
import { todoService } from '../services/todo.service.js'
import { loadTodos, removeTodo, saveTodo } from '../store/actions/todo.actions.js'


export function Dashboard() {

    const todos = useSelector(storeState => storeState.todos)
    const dispatch = useDispatch()

    const [importanceStats, setImportanceStats] = useState([])

    useEffect(()=>{
        loadTodos()
        todoService.getImportanceStats()
            .then(setImportanceStats)
    }, [])


    return (
        <section className="dashboard">
            <h1>Dashboard</h1>
            <h2>Statistics for {todos.length} Todos</h2>
            <hr />
            <h4>By Importance</h4>
            <Chart data={importanceStats}/>
        </section>
    )
}