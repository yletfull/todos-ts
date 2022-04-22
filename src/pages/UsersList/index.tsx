import React, { useEffect } from "react";
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useActions } from '../../hooks/useActions';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function UsersList(){
    const {
        users,
        error,
        isFetching
    } = useTypeSelector((state) => state.user)

    const {
        fetchUsers,
    } = useActions();

    useEffect(() => {
        fetchUsers();
    }, [])

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
            {users.map((user) => (
                <Card sx={{ mt: 2 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {user.name}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {user.email}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Детали пользователя</Button>
                    </CardActions>
              </Card>
            ))}
        </div>
    )
}

export default UsersList;