const express = require('express')
const MongoClient = require('mongodb').MongoClient
const app = express()
const port = 4000
const bodyParser = require("body-parser");

var cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

MongoClient.connect('mongodb://localhost:27017', function (err, client) {
	if (err) throw err

	var db = client.db('scorekeeper-visual')

	app.get('/states', (req, res) => {

		db.collection('states').find().toArray(function (err, result) {
			if (err) throw err

			console.log(result)
			res.send(result)
		})
	})

	app.post('/change-overlay', (req, res) => {
		db.collection('states').find().toArray(function (err, result) {
			if (err) throw err
			if (!result[0]) {
				db.collection('states').insertOne({ _id: 'overlay', state: req.body.state }, function (err, result) {
					console.log(result)
					res.send(result)
				})
			} else {
				db.collection('states').updateOne({ _id: 'overlay' }, { $set: { state: req.body.state } }, function (err, result) {
					console.log(result)
					res.send(result)
				})
			}
		})
	})

	app.post('/change-results-match-number', (req, res) => {
		db.collection('states').find().toArray(function (err, result) {
			if (err) throw err
			if (!result[0]) {
				db.collection('states').insertOne({ _id: 'overlay', resultsMatchNumber: req.body.resultsMatchNumber }, function (err, result) {
					console.log(result)
					res.send(result)
				})
			} else {
				db.collection('states').updateOne({ _id: 'overlay' }, { $set: { resultsMatchNumber: req.body.resultsMatchNumber } }, function (err, result) {
					console.log(result)
					res.send(result)
				})
			}
		})
	})


	app.listen(port, () => {
		console.log(`Example app listening at http://localhost:${port}`)
	})
})