// models/Project.js
import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  name: String,
  link: String,
});

export default mongoose.models.Project || mongoose.model('Project', projectSchema);
