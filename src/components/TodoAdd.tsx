import { Box, InputBase, Button, styled } from "@mui/material";

const Container = styled(Box)`
    & > * {
        margin-right: 20px !important;
        margin: 20px 0;
    }
    & > div > input[type="text"] {
        border-bottom: 1px solid #111111;
        opacity: 0.5;
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

const TodoAdd: React.FC = () => {
    return(
        <>
        <h1>To Do App</h1>
        <Container>
            <InputBase 
                name="title" 
                placeholder="Title" 
                inputProps={{
                    maxLength: 30
                }}
            />
            <InputBase 
                name="text" 
                placeholder="Body"
                inputProps={{
                    maxLength: 60
                }}
            />
            <InputBase 
                type="color"
                name="color"
                defaultValue={'#F5F5F5'}
                placeholder="Choose color" 
            />
            <Button 
                variant="outlined">
                    Add ToDo
            </Button>
        </Container>
        </>
    )
}

export default TodoAdd;