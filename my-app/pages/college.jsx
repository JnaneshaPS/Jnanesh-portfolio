import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const college = () => {
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState('');
  const [projectLink, setProjectLink] = useState('');

 
  return (
    <>
     <Head>
        <title>College | Works</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', paddingTop: '200px' }}>
      <h1 style={{ color: '#333' }}>College Management System</h1>

      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#333' }}>Projects</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {projects.map((project, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>
              <strong>{project.name}:</strong>{' '}
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px' }}>
        <h2 style={{ color: '#333' }}>Add New Project</h2>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="projectName" style={{ marginBottom: '8px' }}>Project Name:</label>
          <input
            type="text"
            id="projectName"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
            style={{ marginBottom: '12px', padding: '8px' }}
          />
          <label htmlFor="projectLink" style={{ marginBottom: '8px' }}>Project Link:</label>
          <input
            type="url"
            id="projectLink"
            value={projectLink}
            onChange={(e) => setProjectLink(e.target.value)}
            required
            style={{ marginBottom: '12px', padding: '8px' }}
          />
          <button
            type="button"
            style={{
              padding: '10px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '4px',
            }}
          >
            Add Project
          </button>
        </div>
      </div>
    </div>
  </>
  );
};

export default college;
