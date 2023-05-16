import express from 'express';
import { healthChecker } from './apiController.js';

export const router = express.Router();


// Default Rotes
router.get('/api/v1/', healthChecker);

