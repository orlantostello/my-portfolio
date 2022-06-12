import React from 'react';

function About() {
  return (
    <div
      name="about"
      className="w-full  bg-gradient-to-b from-blue-800  to-black text-white py-20 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-2 border-cyan-800">About</p>
        </div>
        <p className="text-xl mt-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure eveniet tempore architecto
          eos esse vel assumenda, nesciunt a ducimus, quam sapiente. Veritatis assumenda obcaecati
          asperiores animi placeat delectus autem, voluptatem necessitatibus ducimus maxime debitis
          vitae repudiandae reiciendis rem! Minus sequi animi expedita quae quos? Earum aut
          accusamus fugiat facilis odit.
        </p>

        <br />

        <p className="text-xl ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure eveniet tempore architecto
          eos esse vel assumenda, nesciunt a ducimus, quam sapiente. Veritatis assumenda obcaecati
          asperiores animi placeat delectus autem, voluptatem necessitatibus ducimus maxime debitis
          vitae repudiandae reiciendis rem! Minus sequi animi expedita quae quos? Earum aut
          accusamus fugiat facilis odit.
        </p>
      </div>
    </div>
  );
}

export default About;
