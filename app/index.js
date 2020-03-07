const tf = require('@tensorflow/tfjs')
const tfn = require('@tensorflow/tfjs-node')
const fileUpload = require('express-fileupload')
var fs = require("fs")

const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.use(fileUpload());

const handler = tfn.io.fileSystem("./tfjs_model/model.json")
app.post('/predict', (req, res) => {
    if (!req.files) {
        return res.status(400).send('No files were uploaded.');
    }

    let image = Uint8Array.from(req.files.doggo.data)
    image = tfn.node.decodeImage(image, 3)
    image = tf.image.resizeBilinear(image, [224, 224]).toFloat()
    image = image.div(255)
    image = image.expandDims(0)

    // Use only if you run in AWS infrastructure
    // tf.loadLayersModel('https://yosi1.s3-ap-southeast-1.amazonaws.com/models/stanford_dogs/model.json', { strict: false }).then((model) => {
        
    tf.loadLayersModel(handler, { strict: false }).then((model) => {
        prediction = model.predict(image)
        let { values, indices } = tf.topk(prediction, 3, true)
        values = values.arraySync()[0]
        indices = indices.arraySync()[0]

        let text = fs.readFileSync('./breed_names.txt', 'utf-8')
        let breeds = text.split("\n")

        let predictions = []

        for (i = 0; i < 3; i++) {
            if (values[i] > 0.01) {
                predictions.push({
                    breed: breeds[indices[i]],
                    pct: (values[i] * 100).toFixed(2)
                })
            }
        }

        res.json(predictions)
    }).catch((err) => {
        console.error(err)
        res.send("Prediction error!")
    })
});

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(port, () => console.log(`Doggaire listening on port ${port}!`))