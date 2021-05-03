const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use('/', (req,res)=>{
    res.send(`
        <h3>Hello AWS World</h3>
    `);
});

app.listen(port,()=>{console.log(`${port}server on`)});
