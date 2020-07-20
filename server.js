const path = require('path');
const bodyParser = require('body-parser');
const FormData = require('form-data');
const fetch = require('node-fetch');
const express = require('express');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const port = Number(process.env.PORT) || 5000;
const server = express();
const verify = (req, _, buf) => {
    req.rawBody = buf.toString();
};

server.use(bodyParser.json({ verify }));
server.use(bodyParser.urlencoded({ extended: false, verify }));
server.use('/static', express.static(path.join(__dirname, 'static')))

server.get('/send-id', (req, res) => {
    res.json({ id: process.env.LINE_CREATE_RECORD_LIFF_ID });
})

server.post('/create_reocrd', (req, res) => {
    const params = req.body
    const formdata = new FormData();
    formdata.append("amount", params.amount);
    formdata.append("description", params.description);
    formdata.append("type", params.type);

    var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    fetch(process.env.GOOGLE_APP_SCRIPT_URL, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    res.json({ status: "success" });
})
server.get('/get_records', (req, res) => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const start_date = encodeURIComponent(req.query.start_date);
    const end_date = encodeURIComponent(req.query.end_date);
    fetch(
        `${process.env.GOOGLE_APP_SCRIPT_URL}?start_date=${start_date}&end_date=${end_date}`,
        requestOptions
    )
        .then(response => response.text())
        .then(result => { console.log(result); res.send(result); })
        .catch(error => console.log('error', error));
})
server.get('/create_record_liff', (req, res) => {
    const filename = path.join(`${__dirname}/templates/create_record_liff.html`);
    res.sendFile(filename);
})
server.get('/get_records_liff', (req, res) => {
    const filename = path.join(`${__dirname}/templates/get_record_liff.html`);
    res.sendFile(filename);
})
server.listen(port, err => {
    if (err) throw err;
})