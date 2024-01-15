import { Box, Typography } from '@mui/material';
import { TodoObj } from '../models/todo';
import Todo from './Todo';

interface ITodosProps {
    todos: TodoObj[],
    deleteTodo: (id: string) => void
}

const Todos: React.FunctionComponent<ITodosProps> = ({ todos, deleteTodo }) => {
    return (
        <Box>
            <Typography variant="h5" padding="20px">All Todos</Typography>
            <Box style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    todos.map(todo => (
                        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
                    ))
                }
            </Box>
        </Box>
    )
}

export default Todos;