import { Header, Footer, Hero, Post, Button } from './Components';
import { Home } from './Pages/Home';
import { posts } from './store';

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Home posts={posts} />
      </main>
      <Footer />
    </>
  );
};
