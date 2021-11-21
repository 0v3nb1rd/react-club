// todo change static path
import postImg1 from './assets/img/posts/post1.jpg';
import postImg2 from './assets/img/posts/post2.jpg';
import postImg3 from './assets/img/posts/post3.jpg';
import productPhone from './assets/img/products/iphone13.png';
import productKindle from './assets/img/products/kindle.png';
import productMac from './assets/img/products/mac.png';
import productMonitor from './assets/img/products/aoc.png';

const _allCategories = [
  'all category',
  'phone',
  'computers',
  'monitors',
  'ebooks',
];
const _allBrends = ['all brends', 'apple', 'aoc', 'amazon', 'assus'];

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
  {
    title: 'This is the third title',
    desc:
      'Third reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente...',
    img: postImg3,
  },
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

// https://i.ibb.co/9TtzMNQ/aoc.png
// https://i.ibb.co/ygg0Sqr/iphone13.png
// https://i.ibb.co/G2KTG9c/kindle.png
// https://i.ibb.co/37FxN4k/mac.png
// https://i.ibb.co/QdNZ65G/daco.png
// https://i.ibb.co/ZVFZH77/ipad.png
// https://i.ibb.co/k23wdM9/pocketbook.png

export const products = [
  {
    id: '1',
    cardName: 'Item 1',
    title: 'Iphone 13pro',
    shortText:
      "Introduced on September 14, the iPhone 13 and iPhone 13 mini are Apple's newest flagship iPhones on the more affordable end, and are being sold alongside the more expensive iPhone 13 Pro and iPhone 13 Pro Max...",
    // img: productPhone,
    img: 'https://i.ibb.co/ygg0Sqr/iphone13.png',
    price: '999',
    route: 'iphone13pro',
    category: _allCategories[1],
    brend: _allBrends[1],
  },
  {
    id: '2',
    cardName: 'Item 2',
    title: 'MacBook Max',
    shortText:
      "Apple is continuing it's crusade to banish Intel from its lineup with two more processors: the M1 Pro and M1 Max, professional-grade processors debuting in the 14-inch and 16-inch MacBook Pros...",
    img: 'https://i.ibb.co/37FxN4k/mac.png',
    price: '2499',
    route: 'macbookmax',
    category: _allCategories[2],
    brend: _allBrends[1],
  },
  {
    id: '3',
    cardName: 'Item 3',
    title: 'AOC Monitor 4K',
    shortText:
      'With decades of experience, our technological expertise forms the basis of AOC’s best quality led &amp; lcd monitors. Our engineers incorporate the latest innovations into AOC’s computer monitors...',
    img: 'https://i.ibb.co/9TtzMNQ/aoc.png',
    price: '1099',
    route: 'aocmonitor4k',
    category: _allCategories[3],
    brend: _allBrends[2],
  },
  {
    id: '4',
    cardName: 'Item 4',
    title: 'Amazon Kindle',
    shortText:
      'Lucky for us, we can use special snippets of code in our Amazon listings to access their font styles. All you need to do is type the right things around the sentences in your product description to make the words stand out and look great...',
    img: 'https://i.ibb.co/G2KTG9c/kindle.png',
    price: '199',
    route: 'amazonkindle',
    category: _allCategories[4],
    brend: _allBrends[3],
  },
  {
    id: '5',
    cardName: 'Item 5',
    title: 'ASUS Roc',
    shortText:
      'With decades of experience, our technological expertise forms the basis of AOC’s best quality led &amp; lcd monitors. Our engineers incorporate the latest innovations into AOC’s computer monitors...',
    img: 'https://i.ibb.co/9TtzMNQ/aoc.png',
    price: '1099',
    route: 'aocmonitor4k',
    category: _allCategories[3],
    brend: _allBrends[2],
  },
  {
    id: '6',
    cardName: 'Item 6',
    title: 'Amazon Kindle',
    shortText:
      'Lucky for us, we can use special snippets of code in our Amazon listings to access their font styles. All you need to do is type the right things around the sentences in your product description to make the words stand out and look great...',
    img: 'https://i.ibb.co/G2KTG9c/kindle.png',
    price: '199',
    route: 'amazonkindle',
    category: _allCategories[4],
    brend: _allBrends[3],
  },
  {
    id: '7',
    cardName: 'Item 7',
    title: 'Iphone 13pro',
    shortText:
      "Introduced on September 14, the iPhone 13 and iPhone 13 mini are Apple's newest flagship iPhones on the more affordable end, and are being sold alongside the more expensive iPhone 13 Pro and iPhone 13 Pro Max...",
    img: 'https://i.ibb.co/ygg0Sqr/iphone13.png',
    price: '999',
    route: 'iphone13pro',
    category: _allCategories[1],
    brend: _allBrends[1],
  },
  {
    id: '8',
    cardName: 'Item 8',
    title: 'MacBook Max',
    shortText:
      "Apple is continuing it's crusade to banish Intel from its lineup with two more processors: the M1 Pro and M1 Max, professional-grade processors debuting in the 14-inch and 16-inch MacBook Pros...",
    img: 'https://i.ibb.co/37FxN4k/mac.png',
    price: '2499',
    route: 'macbookmax',
    category: _allCategories[2],
    brend: _allBrends[1],
  },
];

export const filters = [
  {
    id: 1,
    name: 'all category',
    variants: _allCategories,
  },
  {
    id: 2,
    name: 'all brends',
    variants: _allBrends,
  },
  {
    id: 3,
    name: 'sort by name',
    variants: ['sort by name', 'lower price', 'upper price'],
  },
];

// {
// 	id: 2,
// 	title: 'Item 2',
// 	title: 'MacBook Max',
// 	shortText:
// 		"Apple is continuing it's crusade to banish Intel from its lineup with two more processors: the M1 Pro and M1 Max, professional-grade processors debuting in the 14-inch and 16-inch MacBook Pros...",
// 	img: 'https://i.ibb.co/37FxN4k/mac.png',
// 	price: 2499,
// 	route: 'macbookmax',
// 	category: 'computers',
// 	brend: 'apple',
// }
// {
// 	id: 3,
// 	title: 'Item 3',
// 	title: 'AOC Monitor 4K',
// 	shortText:
// 		'With decades of experience, our technological expertise forms the basis of AOC’s best quality led &amp; lcd monitors. Our engineers incorporate the latest innovations into AOC’s computer monitors...',
// 	img: 'https://i.ibb.co/9TtzMNQ/aoc.png',
// 	price: 1099,
// 	route: 'aocmonitor4k',
// 	category: 'monitors',
// 	brend: 'apple',
// }
