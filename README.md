# Dog Breed Classifier

## Goal
- Create a Neural Network model that able to predict Dog breed based on sample images
- Develop a simple web application where user can upload an image and receive predictions

## Dataset
I use [Stanford Dogs Dataset](http://vision.stanford.edu/aditya86/ImageNetDogs/) as the main source of samples. It contains around 12 thousands of dog images into 120 breeds.

## Model
The base model that I use is MobileNetV2 with some fine-tuning. You can find out more about the model training in the notebooks directory.

## Performance
The model achieve overal accuracy of 76%. Maybe the result is pretty biased because of the lack of test samples.

![Accuracy per Class](https://github.com/yos1p/dog-breed-classifier/raw/master/images/accuracy_per_class.png)


