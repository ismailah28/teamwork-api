import express from 'express';
import { welcomeMessage } from '../settings';

const indexRouter = express.Router();

/* GET home page. */
indexRouter.get('/', (req, res, next) => {
  res.status(200).json({ message: welcomeMessage });
});

export default indexRouter;
