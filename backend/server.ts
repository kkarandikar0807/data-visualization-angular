import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { VisualData } from './models/visual-data';

const app = express();

app.use(bodyParser.json());
app.use(cors());

let studentMarks: VisualData[] = [];

    studentMarks.push(new VisualData('Amy', 90, 85, 86));
    studentMarks.push(new VisualData('Bob', 87, 91, 78));
    studentMarks.push(new VisualData('Amy', 92, 75, 99));
    studentMarks.push(new VisualData('Amy', 88, 99, 72));

app.get('/visualdata', (req: any, res: any) => {
        res.json(studentMarks);
})

app.listen(4000, () => {
    console.log("App Running on Port 4000");
})