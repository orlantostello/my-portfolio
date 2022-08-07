import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactImage from '../assets/react.png';
import typescript from '../assets/typescript.png';
import sass from '../assets/sass.png';
import github from '../assets/github.png';
import { v4 } from 'uuid';

const experienceArray = [
  {
    id: v4(),
    src: html,
    title: 'HTML',
    style: 'shadow-orange-500',
  },
  {
    id: v4(),
    src: css,
    title: 'CSS',
    style: 'shadow-blue-500',
  },
  {
    id: v4(),
    src: javascript,
    title: 'JavaScript',
    style: 'shadow-yellow-500',
  },
  {
    id: v4(),
    src: reactImage,
    title: 'React',
    style: 'shadow-blue-600',
  },
  {
    id: v4(),
    src: typescript,
    title: 'TypeScript',
    style: 'shadow-blue-500',
  },
  {
    id: v4(),
    src: sass,
    title: 'Sass',
    style: 'shadow-pink-400',
  },

  {
    id: v4(),
    src: github,
    title: 'GitHub',
    style: 'shadow-gray-400',
  },
];

export default experienceArray;
