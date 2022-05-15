const mongoose = require('mongoose');
/**
 * Model - collection
 * 
 */

const contactSchema = new mongoose.Schema({
    sender: { type:mongoose.Schema.Types.ObjectId, ref: "User" },
    receiver: { type:mongoose.Schema.Types.ObjectId, ref: "User" },
    subject: { type: String },
    text: { type: String },
    created:{type:Date  , default:Date.now},
    isRead: { type: Boolean, default: false}
});

module.exports = mongoose.model('Message', contactSchema);
