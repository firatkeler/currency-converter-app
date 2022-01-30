import React from 'react';
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const CCAlert = ({severity, title, message}) => {
    return (
        <Alert severity={severity}>
            <AlertTitle>{title}</AlertTitle>
            {/*This is an error alert — <strong>check it out!</strong>*/}
            {message}
        </Alert>
    );
}

export default CCAlert;
