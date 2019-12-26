import React from "react";
import { Button } from "@material-ui/core";

const LoginPage: React.FC<{}> = () => {
    return (
    <div>
        <Button variant="contained" color="primary" disableElevation>
            Log in using Google
        </Button>
        <Button variant="contained" color="primary" disableElevation>
            Log in using Microsoft
        </Button>
        <Button variant="contained" color="primary" disableElevation>
            Log in using GitHub
        </Button>
        <Button variant="contained" color="primary" disableElevation>
            Log in using Facebook
        </Button>
        <Button variant="contained" color="primary" disableElevation>
            Log in using Twitter
        </Button>
    </div>);
};

export default LoginPage;