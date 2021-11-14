import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../Home/Home';
import Orders from './Orders';
import Sidebar from './Sidebar';

const UserDashboard = () => {
    return (
        <Router>
            <Sidebar />
            <Switch>
                {/* <Route path='/dashboard' component={Orders} />
                <Route path='/orders' component={Orders} />
                <Route path='/dashboard' component={Orders} />
                <Route exact path='/dashboard' component={Orders} />
                <Route exact path='*' component={<h3>Page Not Found </h3>} /> */}
                <Route path="/my-dashboard">
                    <Orders />
                </Route>


                <Route path="/orders">
                    <div className="py-5">
                        <h3 className="text-center text-primary my-5">Your Order has Successfully Placed !!! <br /> we will Contact With You Soon <br />
                            Customer Dashboard is Coming Soon
                        </h3>
                    </div>
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <h3 className="text-center">Page Not Found</h3>
                </Route>

            </Switch>
        </Router>
    );
};

export default UserDashboard;