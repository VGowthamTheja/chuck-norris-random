const url = "https://api.chucknorris.io/jokes/random"
fetch(url, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));