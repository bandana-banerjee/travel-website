import tour1 from './images/hero1.jpeg';
import tour2 from './images/hero2.jpeg';
import tour3 from './images/hero3.jpeg';
import tour4 from './images/hero4.jpeg';
import tour5 from './images/hero5.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tour' },
];

export const socialLinks = [
  { id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.squarespace.com', icon: 'fab fa-squarespace' },
];

export const Services = [
  { id: 1, icon: 'fas fa-wallet fa-fw', title: 'Tour Package', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia' },
  { id: 2, icon: 'fas fa-tree fa-fw', title: 'Ferry Tickets', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia' },
  { id: 3, icon: 'fas fa-socks fa-fw', title: 'Watersports Activities', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia' },
];

export const Tours = [
  {
    id: 1,
    image: tour1,
    date: 'august 26th, 2024',
    title: 'Family Tour Package',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'Andaman',
    duration: 6,
    cost: 2100

  },
  {
    id: 2,
    image: tour2,
    date: 'october 1th, 2024',
    title: 'Honeymoon Tour Package',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'Andaman',
    duration: 11,
    cost: 1400

  },
  {
    id: 3,
    image: tour3,
    date: 'september 15th, 2024',
    title: 'Group Tour Package',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: ' Andaman',
    duration: 8,
    cost: 5100

  },
  {
    id: 4,
    image: tour4,
    date: 'december 5th, 2024',
    title: 'LTC Package',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'Andaman',
    duration: 20,
    cost: 3300

  },
];

export const list = [
  {
    id: 1,
    image: tour1
  },
  {
    id: 2,
    image: tour2
  },
  {
    id: 3,
    image: tour3

  },
  {
    id: 4,
    image: tour4
  },
   {
    id: 5,
    image: tour5
  }
];
