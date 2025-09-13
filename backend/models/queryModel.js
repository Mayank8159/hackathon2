import mongoose from 'mongoose';

const querySchema = new mongoose.Schema({
  lat: Number,
  lon: Number,
  timestamp: { type: Date, default: Date.now },
  response: mongoose.Schema.Types.Mixed,
});

export const Query = mongoose.model('Query', querySchema);