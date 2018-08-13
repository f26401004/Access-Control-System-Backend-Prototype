const express = require('express');
const app = express();

const record = require('./router/record.js')

app.get('/', (req, res) => {
	res.send('Hello World!!');
});

app.use('/record', record);

app.listen(3000, () => {
	console.log('Server is now listening on port 3000!!');
})
