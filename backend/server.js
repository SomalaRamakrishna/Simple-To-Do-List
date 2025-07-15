const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // ✅ Load env before anything else

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// ✅ Middleware
app.use(cors({origin:'*'})); 
app.use(express.json());

mongoose.connect(MONGO_URI)
  .then(() => console.log(' MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// ✅ Routes
const taskRoutes = require('./routes/taskRoutes');
app.use('/api/tasks', taskRoutes);

const userRoutes=require('./routes/userRoutes');
app.use('/api/user',userRoutes);


app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
