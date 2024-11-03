import React from "react";

function loading() {
    return (
      <div>
        <div className='relative'>
          <div className='w-12 h-12 rounded-full absolute border-2 border-solid border-gray-200'></div>
          <div className='w-12 h-12 rounded-full animate-spin absolute border-2 border-solid border-indigo-500 border-t-transparent'></div>
        </div>
      </div>
    );
}

export default loading;

