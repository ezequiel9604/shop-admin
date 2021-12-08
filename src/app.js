import { Route, Switch } from "react-router";
import { useState } from "react";

import "./css/css-reset.css";
import "./css/general_styles.css";

import Layout from "./layout/Layout";
import Home from "./page/home.component/Home";
import Client from "./page/client.component/Client";
import AddClient from "./page/addGenerals.component/addClient.components/AddClient";
import Profile from "./page/profile.component/Profile";
import Inventory from "./page/inventory.component/Inventory";
import AddInventory from "./page/addGenerals.component/addInventory.component/AddInventory";
import Comment from "./page/comment.component/Comment";
import Order from "./page/order.component/Order";
import AddOrder from "./page/addGenerals.component/addOrder.component/AddOrder";
import Chat from "./page/chat.component/Chat";
import OrderStats from "./page/orderStats.component/OrderStats";
import ClientStats from "./page/clientStats.component/ClientStats";
import InventoryStats from "./page/inventoryStats.component/InventoryStats";
import { Admin } from "./dummyData";
import { AdminContext } from "./store/AdminContext"; 

function App(props) {

  const [admin] = useState(Admin);

  return (
    <Switch>
      <AdminContext.Provider value={admin}>
        <Route path="/" exact>
          <Layout>
            <Home />
          </Layout>
        </Route>

        <Route path="/clients" exact>
          <Layout>
            <Client />
          </Layout>
        </Route>

        <Route path="/clients/add-new-client" exact>
          <Layout>
            <AddClient />
          </Layout>
        </Route>

        <Route path="/inventory" exact>
          <Layout>
            <Inventory />
          </Layout>
        </Route>

        <Route path="/inventory/add-new-product" exact>
          <Layout>
            <AddInventory />
          </Layout>
        </Route>

        <Route path="/comments">
          <Layout>
            <Comment />
          </Layout>
        </Route>

        <Route path="/orders" exact>
          <Layout>
            <Order />
          </Layout>
        </Route>

        <Route path="/orders/add-new-order" exact>
          <Layout>
            <AddOrder />
          </Layout>
        </Route>

        <Route path="/profile">
          <Layout>
            <Profile />
          </Layout>
        </Route>

        <Route path="/chat">
          <Layout>
            <Chat />
          </Layout>
        </Route>

        <Route path="/order-stats">
          <Layout>
            <OrderStats />
          </Layout>
        </Route>

        <Route path="/user-stats">
          <Layout>
            <ClientStats />
          </Layout>
        </Route>

        <Route path="/inventory-stats">
          <Layout>
            <InventoryStats />
          </Layout>
        </Route>

        

      </AdminContext.Provider>
    </Switch>
  );
}

export default App;
