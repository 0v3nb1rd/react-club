// todo change static path
import postImg1 from './assets/img/posts/post1.jpg';
import postImg2 from './assets/img/posts/post2.jpg';
import postImg3 from './assets/img/posts/post3.jpg';
import productPhone from './assets/img/products/iphone13.png';
import productKindle from './assets/img/products/kindle.png';
import productMac from './assets/img/products/mac.png';
import productMonitor from './assets/img/products/aoc.png';

export const posts = [
  {
    title: 'This is the first title',
    desc:
      'First reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente..',
    img: postImg1,
  },
  {
    title: 'This is the second title',
    desc:
      'Second reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente...',
    img: postImg2,
  },
  {
    title: 'This is the third title',
    desc:
      'Third reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente...',
    img: postImg3,
  },
];

export const products = [
  {
    id: '1',
    title: 'Iphone 13pro',
    desc:
      "Introduced on September 14, the iPhone 13 and iPhone 13 mini are Apple's newest flagship iPhones on the more affordable end, and are being sold alongside the more expensive iPhone 13 Pro and iPhone 13 Pro Max. The iPhone 13 and iPhone 13 mini are ideal for those who don't need pro-level camera features...",
    img: productPhone,
    price: '999',
  },
  {
    id: '2',
    title: 'MacBooc M1Max',
    desc:
      "Apple is continuing it's crusade to banish Intel from its lineup with two more processors: the M1 Pro and M1 Max, professional-grade processors debuting in the 14-inch and 16-inch MacBook Pros...",
    img: productMac,
    price: '2499',
  },
  {
    id: '3',
    title: 'AOC Monitor 4K',
    desc:
      'With decades of experience, our technological expertise forms the basis of AOC’s best quality led &amp; lcd monitors. Our engineers incorporate the latest innovations into AOC’s computer monitors, keeping our customers at the forefront of all technological developments. Year after year, trade publications have awarded AOC for their performance in manufacturing best quality led and lcd monitors...',
    img: productMonitor,
    price: '1099',
  },
  {
    id: '4',
    title: 'Amazon Kindle',
    desc:
      'Lucky for us, we can use special snippets of code in our Amazon listings to access their font styles. All you need to do is type the right things around the sentences in your product description to make the words stand out and look great...',
    img: productKindle,
    price: '199',
  },
];
