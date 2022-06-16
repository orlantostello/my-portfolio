import React from 'react';
import contactsArray from '../utils/contactsArray';

const Contacts = () => {
  return (
    <div
      name="contacts"
      className="w-full  bg-gradient-to-b from-black  to-blue-800 text-white py-20 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h3 className="text-4xl font-bold inline  border-b-2 border-fuchsia-600">Contact Me</h3>
        </div>
        <ul className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {contactsArray.map(({ id, href, title, description, child, download, style }) => (
            <li
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <a
                href={href}
                className=" w-full text-white"
                download={download}
                target="-blank"
                rel="noreferrer"
              >
                {child}
                <h4 className="mt-4">{title}</h4>
                <p className="mt-4">{description}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
