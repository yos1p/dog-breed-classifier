const tfn = require('@tensorflow/tfjs-node')
const tf = require('@tensorflow/tfjs')

class ModelFactory {
    model = null

    constructor() {
        this.loadModel()
    }

    loadModel() {
        if (this.model == null) {
            // Use only if you run in AWS infrastructure
            tf.loadLayersModel('https://yosi1.s3-ap-southeast-1.amazonaws.com/models/stanford_dogs/model.json', { strict: false }).then((model) => { 
            //const handler = tfn.io.fileSystem("./tfjs_model/model.json")                
            //tf.loadLayersModel(handler, { strict: false }).then((model) => {
                this.model = model;
                console.log(`Model Loaded: ${this.model != null}`)
            }).catch((err) => {
                console.error(err);
            });
        } else {
            return this.model;
        }
    }
}

module.exports.ModelFactory = ModelFactory