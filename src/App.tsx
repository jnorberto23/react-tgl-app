import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Layout from "./components/layout/Layout/Layout";
import NewBet from "./pages/NewBet";

function App() {
  return (
    <Layout>
      <BrowserRouter >
      <Switch>
        <Route path="/bet" exact>
          <NewBet />
        </Route>
      </Switch>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
