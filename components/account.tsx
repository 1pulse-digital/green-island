import React from 'react';

const Account = () => {
  return (
    <div>
      <form className='  grid flex w-full  space-x-3 '>
        <div className='w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white  dark:bg-gray-800 '>
          <div className='mb-6 text-3xl font-light text-center text-gray-800 dark:text-white'>
            <h1 className={'text-1xl pb-4 font-bold text-left '}>
              Send us a message
            </h1>
          </div>
          <div className='grid max-w-xl grid-cols-2 gap-4 m-auto'>
            <div className='col-span-2 lg:col-span-1'>
              <div className=' relative '>
                <input
                  type='text'
                  id='contact-form-name'
                  className='   flex-1 appearance-none border-b-2 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 '
                  placeholder='First name'
                />
              </div>
            </div>
            <div className='col-span-2 lg:col-span-1'>
              <div className=' relative '>
                <input
                  type='text'
                  id='contact-form-email'
                  className='  appearance-none border-b-2 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 '
                  placeholder='Surname'
                />
              </div>
            </div>
            <div className='col-span-2 lg:col-span-1'>
              <div className=' relative '>
                <input
                  type='text'
                  id='contact-form-email'
                  className=' appearance-none border-b-2 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 '
                  placeholder='Email'
                />
              </div>
            </div>
            <div className='col-span-2 lg:col-span-1'>
              <div className=' relative '>
                <input
                  type='text'
                  id='contact-form-email'
                  className='  border-b-2 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 '
                  placeholder='Tel'
                />
              </div>
            </div>
            <div className='col-span-2'>
              <label className='text-gray-700' htmlFor={'name'}>
                <textarea
                  className=' border-b-2 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 '
                  id='comment'
                  placeholder='Message Here'
                  name='comment'
                  rows={5}
                  cols={40}
                />
              </label>
            </div>
            <div className=' text-right'>
              <button
                type='submit'
                className='py-2 px-4  bg-gray-600 hover:bg-gray-00 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
