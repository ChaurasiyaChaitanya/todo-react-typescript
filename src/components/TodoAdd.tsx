import { Box, InputBase, Button, styled, Typography } from "@mui/material";
import { v4 as uuid } from 'uuid';
import { todoObj } from "../models/todo";
import { useState } from "react";

const Container = styled(Box)`
    & > * {
        margin-right: 20px !important;
        margin: 20px 0;
    }
    & > div > input[type="text"] {
        border-bottom: 1px solid #111111;
        width: 300px;
        padding-right: 25px;
    }
    & > div > input[type="color"] {
        position: relative;
        bottom: -10px;
        width: 40px;
        height: 30px;
    }
`;


const initTodo = {
    id: '',
    title: '',
    body: '',
    color: ''
}

interface IAddTodoProps {
    addTodo: (todo: todoObj) => void
}

const TodoAdd: React.FC<IAddTodoProps> = ({addTodo}) => {

    const [todo, setTodo] = useState<todoObj>(initTodo);
    const [error, setError] = useState<String>('');

    const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setTodo({...todo, [e.target.name] : e.target.value})
    }

    const onTodoAddHandler = () => {
        if (!todo.title && !todo.body) {
            setError('All fields are mandatory');
            return;
        }

        addTodo({ ...todo, id: uuid() });
        setTodo(initTodo);
    }

    return(
        <>
        <Typography variant="h4">To Do App</Typography>
        { error && <Typography color="red" padding="10px">{error}</Typography> }
        <Container>
            <InputBase 
                name="title" 
                placeholder="Title" 
                value={todo.title}
                onChange={(e) => onChangeHandler(e)}
                inputProps={{
                    maxLength: 30
                }}
            />
            <InputBase 
                name="body" 
                placeholder="Body"
                value={todo.body}
                onChange={(e) => onChangeHandler(e)}
                inputProps={{
                    maxLength: 60
                }}
            />
            <InputBase 
                type="color"
                name="color"
                defaultValue={'#F5F5F5'}
                onChange={(e) => onChangeHandler(e)}
                placeholder="Choose color" 
            />
            <Button 
                variant="outlined"
                onClick={() => onTodoAddHandler()}>
                    Add ToDo
            </Button>
        </Container>
        </>
    )
}

export default TodoAdd;