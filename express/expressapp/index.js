import express from 'express';
import data from './data/data.json'

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use('/images' , express.static('images'));

app.get('/' , (req ,res)=>
res.json(data)
//res.send(`a get request with / route from port ${PORT}`)
)

app.post('/newItem' , (req ,res)=>
res.send(`a post request with /newItem route from port ${PORT}`)
)

app.put('/item' , (req ,res)=>
res.send(`a put request with /item route from port ${PORT}`)
)

app.delete('/item' , (req ,res)=>
res.send(`a delete request with /item route from port ${PORT}`)
)

app.listen(PORT , ()=>{
console.log(`your server is running on port ${PORT}`)
console.log(data);
});