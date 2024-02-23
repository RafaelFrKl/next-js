//This is the page you'll see when you run `npm run dev`
import React from 'react';
import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className='flex-center w-full flex-col'>
      <h1 className='head_text text-center'>
        Discover & Share
        <br className='max-md:hidden' />
        <span className='orange_gradient text-center'>AI-Powered Prompts</span>
      </h1>
      <p className='desc text-center'>
        Promptopia is an open-source AI promptiong tool for modern world to
        discover, create and share creative prompts
      </p>

      <Feed />
    </section>
  );
};

export default Home;
