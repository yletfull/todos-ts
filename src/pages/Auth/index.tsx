import React, { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypeSelector } from '../../hooks/useTypeSelector';
import Register from './Register';
import CircularProgress from '@mui/material/CircularProgress';

import Box from '@mui/material/Box';
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

function AuthPage(){
    const {
        isFetching,
        error,
    } = useTypeSelector((state) => state.auth)

    const {
        auth,
    } = useActions();

    useEffect(() => {
        auth();
    }, [])

    if(isFetching) {
        return (
            <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CircularProgress />
            </Box>
        )
    }

    // if(error) {
    //     return (
    //         <h1>
    //             {error}
    //         </h1>
    //     )
    // }

    return (
        <React.Fragment>
            Далее:

            <Outlet />
        </React.Fragment>
    )
}

AuthPage.Register = Register;

export default AuthPage;