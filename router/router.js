import express from 'express';
const router = express.Router();
import {
    homePage, readCSV
} from '../controller/contoller.js'

router.route('/').get(homePage);
router.route('/read').post(readCSV);

export default router;