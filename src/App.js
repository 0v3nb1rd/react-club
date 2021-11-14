import { Header, Footer } from './components';
import { Home, Catalog } from './Pages';
import { posts, products, filters } from './store';

export const App = () => {
  return (
    <>
      <Header />
      <main className=" mt-20 ">
        {/* <Home posts={posts} /> */}
        <Catalog products={products} filters={filters} />
      </main>
      <Footer />
    </>
  );
};
