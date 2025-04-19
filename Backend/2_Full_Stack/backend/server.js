import express from 'express'

const app = express();

// app.use(express.static('dist')); // copy the dist file from the frontend

app.get('/api/jokes', (req, res) =>{
    const jokes = [
        {
            id : 1,
            title : "A joke",
            content : "first joke is..."
        },
        {
            id : 2,
            title : "Another joke",
            content : "second joke is..."
        }, 
        {
            id : 3,
            title : "Third joke",
            content : "third joke is..."
        },
        {
            id : 4,
            title : "Fourth joke",
            content : "fourth joke is..."
        },
        {
            id : 5,
            title : "Fifth joke",
            content : "fifth joke is..."
        },
    ]
    res.send(jokes);
})

const port = process.env.port || 8080;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}/`);
    
})