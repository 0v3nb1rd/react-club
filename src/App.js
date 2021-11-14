import { Header, Footer } from './components';
import { Home, Catalog } from './Pages';
import { posts, products } from './store';
import { Card } from './components/Card';

import {
  Routes,
  Route,
} from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Header />
        <div className="mt-20"></div>
        <Routes>
          <Route path="/" element={<Home posts={posts} />}/>
          <Route path="/catalog" element={<Catalog products={products} /> } />
          <Route path="/card/:id" element={<Card product={products[0]} />} />
          <Route render={() => <h2> Page not found </h2>} />
        </Routes>
      <Footer />
    </>
  );
};
