import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Jnanesha P S | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Jnanesha P S</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/jnanesha-p-s-291067289/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/JnaneshaPS'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Full-stack Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>NoSQL
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> RESTAPI
          </p>
          <p className='py-2'>
            <span className='font-bold'>Google Cloud Services</span>
            <span className='px-2'>|</span>Microsoft Azure Web Services Cloud
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            React Js & Next.js
            </span>
            <span className='px-2'>|</span>1 years
          </p>
          <p className='py-1 italic'>Front End Web Developer & Web Designer (2022-2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Understanding the fundamentals of React, including components, JSX, and the virtual DOM.
            </li>
            <li>
             a clean and visually appealing design that demonstrates your attention to UI/UX.
            </li>
            <li>
            Familiarity with styling React components using CSS, CSS-in-JS libraries, or preprocessors.
            </li>
            <li>
            Ability to fetch and handle data from APIs using tools like fetch or third-party libraries.
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              HTML,CSS,JavaScript,MongoDB
            </span>
            <span className='px-2'>|</span>1 years
          </p>
          <p className='py-1 italic'>Front End  and Database</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            I possess a strong foundation in front-end development, proficient in HTML, CSS, and JavaScript.
            I am committed to staying updated with the latest trends and best practices in web development.
            </li>
            <li>
            I have hands-on experience with MongoDB, a NoSQL database, 
            and am proficient in designing, implementing, and managing robust database solutions.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Educational Qualification
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Primary and High school</span>
            <span className='px-2'>|</span>Dakshina Kannada
          </p>
          <p className='py-1 italic'> (2010 – 2020)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              St.Joseph english medium school,sullia,Dakshina kannada 574239
            </li>
            </ul>
            <p className='italic'>
            <span className='font-bold'>Pre-university Education</span>
            <span className='px-2'>|</span>Dakshina Kannada
          </p>
          <p className='py-1 italic'> (2020 – 2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              K.V.G Amarajyothi pre-university college ,sullia,Dakshina kannada 574239
            </li>  
          </ul>
            <p className='italic'>
            <span className='font-bold'>Bachelor in Engineering</span>
            <span className='px-2'>|</span>Banglore
          </p>
          <p className='py-1 italic'> (2022 – 2026)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            M.S.Ramaiah Institute of Technology,Banglore 560054
            </li>  
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
