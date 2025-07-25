import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
    const {result,setResult}=useState("");
    const sendEmail = async (e) => {
        e.preventDefault();
        setResult("Sending...");

        const formData=new FormData(e.target);
        formData.append("access_key","dc91bc68-34c0-4b64-a2c9-f51006eedb45");

        const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.success("Form Submitted Successfully");
      e.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
        toast.error("Error submitting form");
    }
    }
  return (
    <section id='contact' className='flex flex-col items-center justify-center py-24 px-{12vw} md:px-{7vw} lg:px-{20vw}'>
        <ToastContainer position='top-center' autoClose={3000}/>
        <div className='text-center mb-6'>
            <h2 className='text-4xl font-bold text-white'>CONTACT</h2>
            <p className='text-gray-400 mt-4 text-lg font-semibold'>I'd love to hear from you reach out for any oppurnities for question!</p>
        </div>
        <div className='mt-8 w-full max-w-md bg-black p-6 rounded-lg shadow-lg border border-gray-700'>
            <h3 className='text-xl font-semibold text-white text-center'>
                Contact with Me
            </h3>
            <form onSubmit={sendEmail} className='mt-4 flex flex-col space-y-4'>
                <input type="email" name='user_email' placeholder='Your Email' required className='w-full p-3 rounded-md text-white border border-gray-600' />

                <input type="text" name='user_name' placeholder='Your Name' required className='w-full p-3 rounded-md text-white border border-gray-600' />

                <input type="text" name='message' placeholder='Subject' required className='w-full p-3 rounded-md text-white border border-gray-600' />

                <textarea name="message" placeholder='Message' rows="4" required className='w-full p-3 rounded-md text-white border border-gray-600'></textarea>

                <button type="submit" className='w-full bg-blue-400 py-3 text-white font-bold rounded-md hover:opacity-60 transition cursor-pointer'>
                    Submit
                </button>
            </form>
            {result && (
                <p className='mt-4 text-center text-green-400 font-medium'>{result}</p>
            )}
        </div>
    </section>
  )
}

export default Contact
