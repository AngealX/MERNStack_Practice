import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express(); //now we can run all different methods on this app instance

//setting up general set up
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);
//Now we will connect to the database. We can achieve this by using mongoDB (but we will be using the cloud atlas version of mongoDB)
const CONNECTION_URL = 'mongodb+srv://Cluster0:PolyPride1998@cluster0.lbvhz0a.mongodb.net/?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5001;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

//mongoose.set('useFindAndModify', false); //this makes sure that we get no "warnings" in the console

