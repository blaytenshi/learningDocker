const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
    // if we weren't using docker we would have had to specify an
    // address such as 'localhost:6379' or 'http://myredis.com:6379'
    // but since we are using docker, we can just provide it with the
    // service name specified in the yml file!
    // It's actually docker that recognises this url/uri so you can
    // use it in place of even database url/uris!
    host: 'redis-server',
    port: 6379 // default redis port
});
client.set('visits', 0);

// app that serves the number of visits to a front end app
// gets visits from redis server
app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send('Number of visits is ' + visits);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(8081, () => {
    console.log('Listening on port 8081');
});
