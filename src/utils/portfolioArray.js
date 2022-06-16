import filmoteka from '../assets/portfolio/filmoteka.jpg';
import wallet from '../assets/portfolio/wallet.jpg';
import iceCream from '../assets/portfolio/iceCream.jpg';
import phonebook from '../assets/portfolio/phonebook.jpg';
import tacticalBoard from '../assets/portfolio/tacticalBoard.jpg';

const portfolioArray = [
  {
    id: 1,
    src: wallet,
    demo: 'https://wallet-9es9.netlify.app/',
    code: 'https://github.com/orlantostello/team-project_Wallet_client',
    description: 'Web application to manage your budget, with detailed spending statistics.',
    title: 'Wallet client',
  },
  {
    id: 2,
    src: filmoteka,
    demo: 'https://orlantostello.github.io/team-project_Filmoteka/',
    code: 'https://github.com/orlantostello/team-project_Filmoteka',
    description: 'A web application for searching movies by genre, popularity, and view trailers.',
    title: 'Filmoteka',
  },
  {
    id: 3,
    src: iceCream,
    demo: 'https://orlantostello.github.io/ice-cream/',
    code: 'https://github.com/orlantostello/ice-cream',
    description: 'A web application for tracking ice cream information.',
    title: 'Ice-cream',
  },
  {
    id: 4,
    src: phonebook,
    demo: 'https://my-phonebook-tos.netlify.app/',
    code: 'https://github.com/orlantostello/goit-react-hw-08-phonebook',
    description:
      'Application with registration and authorization for convenient storage of phone numbers.',
    title: 'Phonebook',
  },
  {
    id: 5,
    src: tacticalBoard,
    demo: 'https://orlantostello.github.io/tactical-board/',
    code: 'https://github.com/orlantostello/tactical-board',
    description: 'A web application for choosing a tactical formation and tactics.',
    title: 'Tactical Board',
  },
];

export default portfolioArray;
