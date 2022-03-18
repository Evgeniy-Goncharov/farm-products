import PageWrapper from "./../layout/page-wrapper/page-wrapper";
import "./styles.js";
import featuresList from "../../mocks/featuresList";
import productsList from "../../mocks/productsList";
import { GlobalStyle } from "./styles.js";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppRoute } from "../../const";
import MainPage from "../pages/main-page/main-page";
import BuyPage from "../pages/buy-page/buy-page";
import ScrollTop from './../ui/scroll-top/scroll-top';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollTop />
        <Switch>
          <Route exact path={AppRoute.MAIN}>
            <PageWrapper pageUrl={AppRoute.MAIN}>
              <MainPage features={featuresList}  />
            </PageWrapper>
          </Route>
          <Route  exact path={AppRoute.BUY}>
            <PageWrapper pageUrl={AppRoute.BUY}>
              <BuyPage products={productsList} />
            </PageWrapper>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
