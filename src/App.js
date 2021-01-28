import GlobalStyles from "./styles/GlobalStyles";
import { Route } from "react-router-dom";
import {
  Layout,
  LandingPage,
  SeriesPage,
  MovieListPage,
  RankPage,
  SignUp,
  SignIn,
  Dashboard,
} from "./components";
import PrivateRoute from "./components/PrivateRoute";

import * as ROUTES from "./constants/routes";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Layout>
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SERIES_PAGE} component={SeriesPage} />
        <Route path={ROUTES.MOVIE_LIST} component={MovieListPage} />
        <Route path={ROUTES.RANK_PAGE} component={RankPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <PrivateRoute path={ROUTES.DASHBOARD} component={Dashboard} />
      </Layout>
    </div>
  );
}

export default App;
