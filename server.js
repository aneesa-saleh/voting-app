
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.static('build'))

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log(`Node.js listening on port ${port} ...`);
});
