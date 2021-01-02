import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import Posts from '../pages/posts';
import Users from '../pages/users';

const AppRouter = () => {
    return(
    <Router>

    <Switch>
        <Route component={Users} exact path="/" />
        <Route component={Posts} exact path="/posts/:userId"/>
    </Switch>
    
    </Router>
    )
}

export default AppRouter;