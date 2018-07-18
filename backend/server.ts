import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { VisualData } from './models/visual-data';

const app = express();

app.use(bodyParser.json());
app.use(cors());

let studentMarks: VisualData[] = [];

    studentMarks.push(new VisualData(0, 'Test Label 1', 90, 'red'));
    studentMarks.push(new VisualData(1, 'Test Labe 2', 87, 'yellow'));
    studentMarks.push(new VisualData(2, 'Test Label 3', 78, 'blue'));
    studentMarks.push(new VisualData(3, 'Test Label 4', 125, 'purple'));

app.get('/visualdata', (req: any, res: any) => {
        res.json(studentMarks);
})

app.listen(4000, () => {
    console.log("App Running on Port 4000");
})