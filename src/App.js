import { Header, Footer, Hero } from './components';

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card text-center ">
            <figure className="px-10 pt-10">
              <img
                src="https://picsum.photos/id/1005/400/250"
                className="rounded-xl"
                alt="images"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">shadow, center, padding</h2>
              <p>
                Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
                Sit sit necessitatibus veritatis sed molestiae voluptates
                incidunt iure sapiente.
              </p>
            </div>
          </div>
          <div className="card text-center ">
            <figure className="px-10 pt-10">
              <img
                src="https://picsum.photos/id/1005/400/250"
                className="rounded-xl"
                alt="images"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">shadow, center, padding</h2>
              <p>
                Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
                Sit sit necessitatibus veritatis sed molestiae voluptates
                incidunt iure sapiente.
              </p>
            </div>
          </div>
          <div className="card text-center ">
            <figure className="px-10 pt-10">
              <img
                src="https://picsum.photos/id/1005/400/250"
                className="rounded-xl"
                alt="images"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">shadow, center, padding</h2>
              <p>
                Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
                Sit sit necessitatibus veritatis sed molestiae voluptates
                incidunt iure sapiente.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
