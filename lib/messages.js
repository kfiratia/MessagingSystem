const Message = require('../models/messages');
const User = require('../models/users');
const jwt = require("jsonwebtoken");
class Messages {

    async create(sender,Receiver ,subject,text,) {
        const message_from = await User.findOne({name: sender});
        const message_to = await User.findOne({name: Receiver}); 
        if(!message_from || !message_to){
            return "The sender or receiver does not exist";
        }
        try{
            const new_message = new Message({ sender: message_from._id, receiver: message_to._id,subject,text});
            await new_message.save();
            return new_message;
        }
        catch{
            return 'You have missing parameters';
        }
    }

    async all_messages_for_user(name) {
        const user_id = await User.findOne({name: name});
        let all_messages = await Message.find({receiver: user_id}).populate("sender", "name");
        return all_messages;
    }

    async all_unread_messages_for_user(name) {
        const user_id = await User.findOne({name: name});
        console.log(user_id);
        let all_messages = await Message.find({receiver: user_id,isRead:false}).populate("sender", "name");
        return all_messages;
    }

    async readMessage(id) {
        const message = await Message.findByIdAndUpdate(
            {_id: id},
            {isRead: true});
        return message;
    }

    async delete(id) {
        try {
            await Message.deleteOne({ _id: id });
            return "the message is deleted";
        } catch (e) {
            return e;
        }
    }

    async Verify_username_with_token(token,name){
        const user = await User.findOne({name: name});
        if (user.token === token)
            return true;
        else
            return false;
    }

    createToken(id){
        return jwt.sign({id}, process.env.PASSWORD, {
          expiresIn: "2h",
        });
      };

}
module.exports = new Messages();
