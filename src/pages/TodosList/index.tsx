import React, { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypeSelector } from '../../hooks/useTypeSelector';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CircularProgress from '@mui/material/CircularProgress';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
            <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CircularProgress />
            </Box>
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
                <Card sx={{ mt: 1 }}>
                    <CardContent sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Typography variant="h5" component="div">
                            {todo.title}
                        </Typography>
                        {todo.completed ? <Typography sx={{ fontSize: 18 }} color={todo.completed ? 'secondary' : 'primary'}>
                            <CheckCircleOutlineIcon />
                            Выполнено
                        </Typography> : 
                        <Typography sx={{ fontSize: 18 }} color={todo.completed ? 'secondary' : 'primary'}>
                            <AccessTimeIcon />
                            Не выполнено
                        </Typography>}
                    </CardContent>
                    <CardActions>
                        <Button color={!todo.completed ? 'secondary' : 'primary'} size="small">
                            {!todo.completed ? 'Завершить' : 'Запустить'}
                        </Button>
                    </CardActions>
                </Card>
            ))}
            
        </div>
    )
}

export default TodosList;