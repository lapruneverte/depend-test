const express = require('express');
const app = express();
 
//Configurations
app.set('port', 3000);
app.set('json spaces', 2)
 
// API
app.get('/', (req, res) => {    
    res.json(
        {
            "Title": "Hola mundo",
            "Author": "Claudia",
        }
    );
})
 
//Start server
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});