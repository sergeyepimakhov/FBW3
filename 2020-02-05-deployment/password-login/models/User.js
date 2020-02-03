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
  passwordResetToken : String,
  passwordResetExpires : Date ,
});

UserSchema.methods.createPasswordResetToken = ()=>{
  const resetToken  = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken= crypto

  .createHash('sha256')
  .update(resetToken)
  .digest('hex');
  console.log({resetToken} , this.passwordResetToken)

  this.passwordResetExpires = Date.now()+10 * 60 * 1000;
  return resetToken;

}

const User = mongoose.model('User', UserSchema);

module.exports = User;