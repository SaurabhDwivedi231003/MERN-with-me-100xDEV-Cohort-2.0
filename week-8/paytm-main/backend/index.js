const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
  
app.use(cors());
app.use(express.json());
 
   
// Import main router , isme again se sub routers ko import kar rakha hai
const mainRouter = require('./routes/index');

// Use main router
app.use('/api/v1', mainRouter); 
    
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});   