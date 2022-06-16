import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { TiGroupOutline } from 'react-icons/ti';
import { RiContactsBookLine } from 'react-icons/ri';
import { BsArrowDownCircle } from 'react-icons/bs';
import { MdHighQuality } from 'react-icons/md';

const sidebarLinksArray = [
  {
    id: 1,
    link: 'home',
    child: (
      <>
        <AiOutlineHome size={30} />
      </>
    ),
    style: 'rounded-t-full',
  },
  {
    id: 2,
    link: 'about',
    child: (
      <>
        <AiOutlineUser size={30} />
      </>
    ),
  },
  {
    id: 3,
    link: 'portfolio',
    child: (
      <>
        <TiGroupOutline size={30} />
      </>
    ),
  },
  {
    id: 4,
    link: 'experience',
    child: (
      <>
        <MdHighQuality size={30} />
      </>
    ),
  },
  {
    id: 5,
    link: 'contacts',
    child: (
      <>
        <RiContactsBookLine size={30} />
      </>
    ),
  },
  {
    id: 6,
    link: 'footer',
    child: (
      <>
        <BsArrowDownCircle size={30} />
      </>
    ),
    style: 'rounded-b-full',
  },
];

export default sidebarLinksArray;
