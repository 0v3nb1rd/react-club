import { Header, Footer } from './components';
import { Home, Catalog, Item } from './Pages';
import { posts, products, filters } from './store';

import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Header />
      <main className="mt-20">
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route
            path="/catalog"
            element={<Catalog products={products} filters={filters} />}
          />
          <Route
            path="/catalog/:productId"
            element={<Item products={products} />}
          />
          <Route
            path="*"
            element={
              <h1 className="text-3xl mt-20 text-center text-red-500">
                404 Page not found
              </h1>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
};
