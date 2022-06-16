import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill, BsTelegram } from 'react-icons/bs';

const socialLinksArray = [
  {
    id: 1,
    child: (
      <>
        LinkedIn <FaLinkedin size={30} />
      </>
    ),
    href: 'https://www.linkedin.com/in/oleg-teslenko/',
    style: 'rounded-tr-md',
  },
  {
    id: 2,
    child: (
      <>
        GitHub <FaGithub size={30} />
      </>
    ),
    href: 'https://github.com/orlantostello',
  },
  {
    id: 3,
    child: (
      <>
        Telegram <BsTelegram size={30} />
      </>
    ),
    href: 'https://t.me/orlantos_tello',
  },
  {
    id: 4,
    child: (
      <>
        Mail <HiOutlineMail size={30} />
      </>
    ),
    href: 'mailto:orlantostello@gmail.com',
  },
  {
    id: 5,
    child: (
      <>
        CV <BsFillPersonLinesFill size={30} />
      </>
    ),
    href: '/CV_Oleh_Teslenko_Front-end_developer.pdf',
    style: 'rounded-br-md',
    download: true,
  },
];

export default socialLinksArray;
