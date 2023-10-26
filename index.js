#!/usr/bin/env node

let joke;
const url = "https://api.chucknorris.io/jokes/random?exclude=explicit"
fetch(url, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}).then(res => res.json()).then(data => {
    joke = data
    console.log(data.value);
}).catch(err => console.log(err));


module.exports = {
    url: url,
    joke: joke
}