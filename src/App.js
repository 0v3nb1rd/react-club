import { Header, Footer } from './components';
import { Home, Catalog } from './Pages';
import { posts } from './store';

export const App = () => {
  return (
    <>
      <Header />
      <main className=" mt-20 ">
        <Home posts={posts} />
        {/* <Catalog /> */}
      </main>
      <Footer />
    </>
  );
};
