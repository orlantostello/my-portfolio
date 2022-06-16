import React from 'react';

function About() {
  return (
    <div
      name="about"
      className="w-full  bg-gradient-to-b from-blue-800  to-black text-white py-20 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <h3 className="text-4xl font-bold inline border-b-2 border-fuchsia-600">About</h3>
        </div>
        <p className="text-2xl mt-5 font-bold">
          Hi. I'm Oleh, nice to meet you. Please take a look around!
        </p>

        <br />

        <p className="text-xl md:w-[80%]">
          I am passionate about building a great web application that improves the lives of the
          people around me. A responsible team player, attentive to details. I study quickly, and
          responsibly, regardless and I understand that I can cope with the task and am ready to
          solve difficulties.
        </p>
      </div>
    </div>
  );
}

export default About;
