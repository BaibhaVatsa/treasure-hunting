import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core"

const HomePage: React.FC<{}> = () => {
    const history = useHistory();
    return (<div onClick={() => history.push("/login")}>

    </div>);
};

export default HomePage;