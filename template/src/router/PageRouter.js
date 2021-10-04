import React, {memo} from 'react';
import {BrowserRouter,Switch, Route} from "react-router-dom";
import {FirstPage} from "../pages/firstPage/FirstPage";
import {SecondPage} from "../pages/secondPage/SecondPage";
import {Homepage} from "../pages/homepage/Homepage";

export const PageRouter = memo(props => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Homepage/>
            </Route>
            <Route path="/firstPage">
                <FirstPage/>
            </Route>
            <Route path="/secondPage">
                <SecondPage/>
            </Route>
        </Switch>
        </BrowserRouter>
    )
})