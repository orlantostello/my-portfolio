import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill, BsTelegram } from 'react-icons/bs';

const contactsArray = [
  {
    id: 1,
    title: 'LinkedIn',
    description: '',
    child: <FaLinkedin size={80} className="w-20 mx-auto" />,
    href: 'https://www.linkedin.com/in/oleg-teslenko/',
    style: 'shadow-blue-500',
  },
  {
    id: 2,
    title: 'GitHub',
    description: '',
    child: <FaGithub size={80} className="w-20 mx-auto" />,
    href: 'https://github.com/orlantostello',
    style: 'shadow-blue-500',
  },
  {
    id: 3,
    title: 'Telegram',
    description: '',
    child: <BsTelegram size={80} className="w-20 mx-auto" />,
    href: 'https://t.me/orlantos_tello',
    style: 'shadow-blue-500',
  },
  {
    id: 4,
    title: 'Mail',
    description: '',
    child: <HiOutlineMail size={80} className="w-20 mx-auto" />,
    href: 'mailto:orlantostello@gmail.com',
    style: 'shadow-blue-500',
  },
  {
    id: 5,
    title: 'CV',
    description: '',
    child: <BsFillPersonLinesFill size={80} className="w-20 mx-auto" />,
    href: '/CV_Oleh_Teslenko_Front-end_developer.pdf',
    style: 'shadow-blue-500',
    download: true,
  },
];

export default contactsArray;
