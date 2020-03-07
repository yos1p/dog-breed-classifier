## Doggaire Web App

### Overview

This is a simple Node.js application that will receive image from Client, make a prediction, and return the prediction. The model that we use is the same model in this project, the model is converted to be used by Tensorflow.js

### Getting Started

To run the app, simply use `node index.js` and Doggaire will run on port 3000.

### Getting Started with Docker

Dockerfile is also prepared so that you can build and run in container. 

I don't include tfjs_model in the Docker image. As alternative, we can use tfjs_model stored in S3. This will greatly reduce the size of the image.

<br/><br/>

*TensorFlow, the TensorFlow logo and any related marks are trademarks of Google Inc.*
