## Doggaire Web App

### Overview

This is a simple Node.js application that will receive image from Client, make a prediction, and return the prediction. The model that we use is the same model in this project, the model is converted to be used by [Tensorflow.js](https://js.tensorflow.org)

### Running Locally

To run the app, simply use `node index.js` and Doggaire will run on port 3000.

### Running on Docker

Dockerfile is also prepared so that you can build and run in container. 

I don't include tfjs_model in the Docker image, you can modify `.dockerignore` file. As alternative, we can use tfjs_model stored in S3. This will greatly reduce the size of the image.

### Running on AWS Elastic Beanstalk

I also try to run it on [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk) as Single Container Application. 

It's very easy to deploy, I put some default configuration files that can help you to try it out. I use [EB CLI](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3.html) to deploy directly from the `app` directory.

<br/><br/>
