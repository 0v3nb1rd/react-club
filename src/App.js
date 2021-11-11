import { Header, Footer, Hero } from './components';
import postImg1 from './assets/img/posts/post1.jpg';
import postImg2 from './assets/img/posts/post2.jpg';
import postImg3 from './assets/img/posts/post3.jpg';

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <section className="container mx-auto -mt-20 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card text-center ">
              <figure className="px-10 pt-10">
                <img
                  src={postImg1}
                  className="rounded-xl object-cover h-full"
                  alt="images"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">This is the first title</h2>
                <p>
                  First reiciendis beatae tenetur excepturi aut pariatur est
                  eos. Sit sit necessitatibus veritatis sed molestiae voluptates
                  incidunt iure sapiente.
                </p>
              </div>
            </div>

            <div className="card text-center ">
              <figure className="px-10 pt-10 h-full">
                <img
                  src={postImg2}
                  className="rounded-xl object-cover h-full"
                  alt="images"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">This is the second title</h2>
                <p>
                  Second reiciendis beatae tenetur excepturi aut pariatur est
                  eos. Sit sit necessitatibus veritatis sed molestiae voluptates
                  incidunt iure sapiente.
                </p>
              </div>
            </div>

            <div className="card text-center ">
              <figure className="px-10 pt-10 h-full">
                <img
                  src={postImg3}
                  className="rounded-xl object-cover h-full"
                  alt="images"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">This is the third title</h2>
                <p>
                  Third reiciendis beatae tenetur excepturi aut pariatur est
                  eos. Sit sit necessitatibus veritatis sed molestiae voluptates
                  incidunt iure sapiente.
                </p>
              </div>
            </div>
          </div>
          <button className="btn btn-accent btn-outline btn-wide btn-md flex mx-auto mt-10">
            View more
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
};
