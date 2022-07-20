//import fetch from 'node-fetch';

// fetch(URL)
// .then(resp => resp.json())
// .then(data => console.log(data))
// .catch(err => console.log(err));

import axios from 'axios';
import express from 'express';
import cors from 'cors';

//i now have an express app/server tat can recieve http(s) requests and can send back http(s) responses
//This app/server is deaf
const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
});

const URL = 'https://api.kanye.rest/'

//GET /kanye_quotes
// <SERVERNAME>.<METHODNAME>(<PATHNAME>, <CALLBACK FUNC>)
// similar to: element.addEventListener("click", () => {}), its listeneing for the request for /kanye_quotes instead of a click.
app.get('/kanye_quotes', async (req, res) => {
    //handle request when it comes in
    try {
        const response = await axios.get(URL)
        res.send(response.data);
    } catch (error) {
        console.log(error);
    }

    // the above is the same as:
    // const response = await axios.get(URL)
    // axios
    // .get(URL)
    // .then(resp => {
    //     res.send(resp.data)
    // })
    // .catch(err => console.log(err));
});
