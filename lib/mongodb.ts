import mongoose from 'mongoose';
import { uri } from '../config.js';

let isConnected = false;

export async function connectToDatabase() {
  if (isConnected) return;
  try {
    await mongoose.connect(uri);
    isConnected = true;
    console.log('[🟢] MongoDB connected');
  } catch (error: any) {
    console.error('[🔴] MongoDB connection error:', error.message);
    throw error;
  }
}
