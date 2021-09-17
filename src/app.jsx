import { Route, Switch } from "react-router";

import "./css/css-reset.css";
import "./css/general_styles.css";

import Layout from "./layout/Layout";

import Home from "./page/home.component/Home";
import Client from "./page/client.component/Client";
import Profile from "./page/profile.component/Profile";
import Inventory from "./page/inventory.component/Inventory";
import Comment from "./page/comment.component/Comment";
import Order from "./page/order.component/Order";

function App(props) {
  return (
    <Switch>
      <Route path="/" exact>
        <Layout>
          <Home />
        </Layout>
      </Route>

      <Route path="/clients">
        <Layout>
          <Client />
        </Layout>
      </Route>

      <Route path="/inventory">
        <Layout>
          <Inventory />
        </Layout>
      </Route>

      <Route path="/comments">
        <Layout>
          <Comment />
        </Layout>
      </Route>

      <Route path="/orders">
        <Layout>
          <Order />
        </Layout>
      </Route>

      <Route path="/profile">
        <Layout>
          <Profile />
        </Layout>
      </Route>
    </Switch>
  );
}

export default App;
