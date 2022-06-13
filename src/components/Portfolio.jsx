import React from 'react';
import filmoteka from '../assets/portfolio/filmoteka.jpg';
import wallet from '../assets/portfolio/wallet.jpg';
import iceCream from '../assets/portfolio/iceCream.jpg';
import phonebook from '../assets/portfolio/phonebook.jpg';
import tacticalBoard from '../assets/portfolio/tacticalBoard.jpg';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: wallet,
      demo: 'https://wallet-9es9.netlify.app/',
      code: 'https://github.com/orlantostello/team-project_Wallet_client',
    },
    {
      id: 2,
      src: filmoteka,
      demo: 'https://orlantostello.github.io/team-project_Filmoteka/',
      code: 'https://github.com/orlantostello/team-project_Filmoteka',
    },
    {
      id: 3,
      src: iceCream,
      demo: 'https://orlantostello.github.io/ice-cream/',
      code: 'https://github.com/orlantostello/ice-cream',
    },
    {
      id: 4,
      src: phonebook,
      demo: 'https://my-phonebook-tos.netlify.app/',
      code: 'https://github.com/orlantostello/goit-react-hw-08-phonebook',
    },
    {
      id: 5,
      src: tacticalBoard,
      demo: 'https://orlantostello.github.io/tactical-board/',
      code: 'https://github.com/orlantostello/tactical-board',
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black  to-blue-800 w-full text-white  py-20 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline  border-b-2 border-fuchsia-600">Portfolio</p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
              <div className="flex items-center justify-center">
                <a
                  href={demo}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  target="-blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
                <a
                  href={code}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  target="-blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
