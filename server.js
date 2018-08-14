const express = require('express');
const app = express();

const record = require('./routes/record.js')
const blocklist = require('./routes/blocklist.js')

app.get('/', (req, res) => {
	res.send('Hello World!!');
});

app.use('/record', record);
app.use('/blocklist', blocklist);

app.listen(3000, () => {
	console.log('Server is now listening on port 3000!!');
})
