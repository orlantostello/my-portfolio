import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { TiGroupOutline } from 'react-icons/ti';
import { RiContactsBookLine } from 'react-icons/ri';
import { BsArrowDownCircle } from 'react-icons/bs';
import { MdHighQuality } from 'react-icons/md';
import { v4 } from 'uuid';

const sidebarLinksArray = [
  {
    id: v4(),
    link: 'home',
    child: (
      <>
        <AiOutlineHome size={30} />
      </>
    ),
    style: 'rounded-t-full',
  },
  {
    id: v4(),
    link: 'about',
    child: (
      <>
        <AiOutlineUser size={30} />
      </>
    ),
  },
  {
    id: v4(),
    link: 'portfolio',
    child: (
      <>
        <TiGroupOutline size={30} />
      </>
    ),
  },
  {
    id: v4(),
    link: 'experience',
    child: (
      <>
        <MdHighQuality size={30} />
      </>
    ),
  },
  {
    id: v4(),
    link: 'contacts',
    child: (
      <>
        <RiContactsBookLine size={30} />
      </>
    ),
  },
  {
    id: v4(),
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
