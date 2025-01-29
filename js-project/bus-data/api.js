const express = require("express");
const Routes = require("./data1");
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

const corsOptions = {
  origin: ['http://127.0.0.1:5501','http://127.0.0.1:5500','http://127.0.0.1:4000','https://mybusroutes.com'], // Allow localhost for development and your production domain
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));


app.use(express.json());

app.get('/api/Routes', (req, res) => {
  res.json(Routes);
});


app.get('/api/Routes/:from/:end', (req, res) => {
  const { from, end } = req.params;
  
 
  const filterRoutes = Routes.filter(route => route.from === from && route.end === end);
  
  if (filterRoutes.length > 0) {
    res.json(filterRoutes);
  } else {
    res.status(404).json({ message: 'No buses found for this route.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
y