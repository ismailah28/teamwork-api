import express from 'express';

const indexRouter = express.Router();

/* GET home page. */
indexRouter.get('/', (req, res, next) => {
  res.status(200).json({ message: 'Welcome to Teamwork API!' });
});

export default indexRouter;
