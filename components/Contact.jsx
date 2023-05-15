import React from "react";

const Contact = () => {
  return (
    <div className="max-w-[1240px] m-auto p-4 h-screen">
      <h1 className="text-3xl text-white font-bold text-center p-3 m-auto">Let's work together</h1>
      <form className="max-w-[600px] m-auto">
        <div className="grid grid-cols-2 gap-2">
          <input className='border shadow-lg p-3' type="text" placeholder="Name" />
          <input className='border shadow-lg p-3' type="email" placeholder="Email" />
        </div>
        <input className='border shadow-lg p-3 w-full my-2' type="text" placeholder="Subject"/>
        <textarea className="border shadow-lg p-3 w-full" name="" id="" cols={30} rows={10} placeholder="Message"></textarea>
        <button className="border text-white shadow-lg p-4 my-8 w-full mt-2">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
