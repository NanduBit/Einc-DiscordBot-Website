const { Session } = require('inspector/promises');
const mongoose = require('mongoose');


const UserWebSchema = new mongoose.Schema({
  access_token: { type: String },
  expires_in: { type: Number },
  refresh_token: { type: String },
  session: { type: String },
  sessionCreatedAt: { type: Date, default: Date.now },
  id: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  avatar: { type: String },
  discriminator: { type: String, required: true },
  public_flags: { type: Number },
  flags: { type: Number },
  banner: { type: String, default: null },
  accent_color: { type: Number, default: null },
  global_name: { type: String },
  banner_color: { type: String, default: null },
  mfa_enabled: { type: Boolean },
  locale: { type: String },
  premium_type: { type: Number },
});

UserWebSchema.index({ sessionCreatedAt: 1 }, { expireAfterSeconds: 604800 });

// Prevent OverwriteModelError in dev/hot-reload/serverless
module.exports = mongoose.models.UserWeb || mongoose.model('UserWeb', UserWebSchema);