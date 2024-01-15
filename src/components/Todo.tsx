
import { TodoObj } from "../models/todo";

import { Card, CardContent, Box, Typography, Button, styled } from '@mui/material';

interface ITodoProps {
    todo: TodoObj,
    deleteTodo: (id: string) => void
}

const StyledCard = styled(Card)`
    width: 360px;
    margin: 20px 30px;
`

const Wrapper = styled(Box)`
    & > button {
        border: 1px solid #000;
        background: #fff; 
        color: red;
        margin-top: 5px;
    }
`

const Todo: React.FC<ITodoProps> = ({ todo, deleteTodo }) => {
    
    return (
        <StyledCard style={{ backgroundColor: todo.color }}>
            <CardContent>
                <Wrapper>
                    <Typography variant="h4">{todo.title}</Typography>
                    <Typography variant="h6">{todo.body}</Typography>
                    <Button variant="outlined" onClick={() => deleteTodo(todo.id)}>Delete ToDo</Button>
                </Wrapper>
            </CardContent>
        </StyledCard>
    )
}

export default Todo;