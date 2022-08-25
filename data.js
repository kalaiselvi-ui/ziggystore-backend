import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
    products: [
      {
        // _id: '1',
        name: 'Redmi Note 11 Dual',
        slug: 'redmi note 11',
        category: 'Mobile',
        image: '/images/img-9.png', // 679px × 829px
        price: 641,
        countInStock:5,
        brand: 'Xiaomi',
        rating: 4.5,
        numReviews: 10,
        description: 'Xiaomi is a consumer electronics and smart manufacturing company with smartphones and smart hardware connected by an IoT platform at its core. The company has released many models over the years',
      },
      {
        // _id: '2',
        name: 'Galaxy M23 Dual SIM',
        slug: 'galaxy m23',
        category: 'Mobile',
        image: '/images/img-4.png',
        price: 999,
        countInStock: 0,
        brand: 'Samsung',
        rating: 4.0,
        numReviews: 10,
        description: 'The power of next-generation 5G data speeds brings a whole new experience to your mobile — from super smooth gaming and streaming, to ultra-fast sharing and downloading',
      },
      {
        // _id: '2',
        name: 'Samsung Galaxy A03s Dual SIM',
        slug: 'samsung galaxy A03',
        category: 'Mobile',
        image: '/images/img-3.png',
        price:  378,
        countInStock: 3,
        brand: 'Samsung',
        rating: 4.0,
        numReviews: 10,
        description: 'The power of next-generation 5G data speeds brings a whole new experience to your mobile — from super smooth gaming and streaming, to ultra-fast sharing and downloading',
      },,
      {
        // _id: '4',
        name: 'Adidas Fit Pant',
        slug: 'adidas-fit-pant',
        category: 'Pants',
        image: '/images/p4.jpg',
        price: 65,
        countInStock: 5,
        brand: 'Puma',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
    ],
  };
  export default data;