import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId } from "../socket/socket.js";
import { io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  try{
    const {message} = req.body ;
    const {id:recieverId} = req.params ;
    const senderId = req.user._id ;

   let conversation = await Conversation.findOne({
        participants: {$all: [senderId, recieverId] },
    });
    if (!conversation){
        conversation = await Conversation.create({
          participants: [senderId, recieverId],
        });
    }
    const newMessage = new Message({
      senderId,
      recieverId,
      message
    });
    if(newMessage){
      conversation.messages.push(newMessage._id);
    }
    // SOCKET IO FUNCTIONALITY WILL GO HERE ...
    // await conversation.save();
    // await newMessage.save();
    // this will run in parallel;
    await Promise.all([conversation.save(), newMessage.save()]);

    const receiverSocketId = getReceiverSocketId(recieverId);
    if(receiverSocketId){
      //io.to(<socketId>).emit() used to send events to specific client
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }






    res.status(201).json(newMessage);
  }
  catch(error){
    console.log("Error in sendMessage controller: ",error.message)
    res.status(500).json({error: "Internal server error"});
  }
}; 
export const getMessages = async (req, res) => {
  try{
    const {id:userToChatId} = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId]},
    }).populate("messages");
    if(!conversation){
      return res.status(200).json([]);
    }
    const messages = conversation.messages;

    res.status(200).json(messages);
  }
  catch(error){
    console.log("Error in getMessage controller: ", error.message);
    res.status(500).json({error: "Internal server error "});
  }
}