import { Header, Footer } from './components';
import { Home, Catalog } from './Pages';
import { posts } from './store';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Header />

      <main className=" mt-20 "></main>
      <Home posts={posts} />

      <Router>
        <Switch>
          {/* <Route path="/home" component={Home} /> */}
          <Route path="/catalog" component={Catalog} />
          {/* <Route path="/cart" component={Cart} /> */}
          <Route render={() => <h2> Page not found </h2>} />
        </Switch>
      </Router>

      <Footer />
    </>
  );
};
