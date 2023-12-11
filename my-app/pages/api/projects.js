import cors from 'cors';
import connectDB from '../../utils/connectDB';
import Project from '../../models/Project';

connectDB();

const corsMiddleware = cors({
  origin: 'http://localhost:3000',
  credentials: true,
});

export default corsMiddleware(async function handler(req, res) {
  console.log('Handler function called. Method:', req.method);

  if (req.method === 'GET') {
    try {
      const projects = await Project.find();
      console.log('GET Request. Projects:', projects);
      res.status(200).json(projects);
    } catch (error) {
      console.error('GET Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'POST') {
    const { name, link } = req.body;
    console.log('POST Request. Body:', req.body);
    try {
      const newProject = new Project({ name, link });
      await newProject.save();
      console.log('Project saved:', newProject);
      res.status(201).json(newProject);
    } catch (error) {
      console.error('POST Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    console.log('Method Not Allowed');
    res.status(405).json({ error: 'Method Not Allowed' });
  }
});
