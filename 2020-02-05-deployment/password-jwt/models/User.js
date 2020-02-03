const mongoose = require('mongoose');
const crypto = require('crypto');
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  passwordChangedAt : Date,
  passwordResetToken :String,
  passwordResetExpire : String
});

UserSchema.methods.createPasswordResetToken = function(){
  const resetToken = crypto.randomBytes(32).toString('hex');
  this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
  console.log({resetToken} , this.passwordResetToken );

  this.passwordResetExpire = Date.now() + 10 * 60 * 1000; // just for 10 minutes
  return resetToken;

}
const User = mongoose.model('User', UserSchema);

module.exports = User;