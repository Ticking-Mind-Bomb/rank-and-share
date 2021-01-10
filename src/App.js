import GlobalStyles from "./styles/GlobalStyles";
import { Route } from "react-router-dom";
import {
  Layout,
  LandingPage,
  SeriesPage,
  MovieListPage,
  RankPage,
} from "./components";

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
      </Layout>
    </div>
  );
}

export default App;
