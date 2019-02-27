//@flow
import React from "react";
// import classNames from 'classNames'

type PropTypes = {
  character: Object
};

const Character = function Character({ character }: PropTypes) {
  const { name, description, thumbnail } = character || {};

  return (
    <div className="flex justify-center">
      <div className="bg-black-90 br2">
        <h1 className="white-90">{name}</h1>
        {/* <style jsx>{`
        .div {
          
        }

        
      `}</style> */}
      </div>
    </div>
  );
};

export default Character;
