import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill, BsTelegram } from 'react-icons/bs';
import { v4 } from 'uuid';

const socialLinksArray = [
  {
    id: v4(),
    child: (
      <>
        LinkedIn <FaLinkedin size={30} />
      </>
    ),
    href: 'https://www.linkedin.com/in/oleg-teslenko/',
    style: 'rounded-tr-md',
  },
  {
    id: v4(),
    child: (
      <>
        GitHub <FaGithub size={30} />
      </>
    ),
    href: 'https://github.com/orlantostello',
  },
  {
    id: v4(),
    child: (
      <>
        Telegram <BsTelegram size={30} />
      </>
    ),
    href: 'https://t.me/orlantos_tello',
  },
  {
    id: v4(),
    child: (
      <>
        Mail <HiOutlineMail size={30} />
      </>
    ),
    href: 'mailto:orlantostello@gmail.com',
  },
  {
    id: v4(),
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
