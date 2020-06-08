import React from "react";
import ChatBot from "react-simple-chatbot";
import { steps } from "../../utils/constants";

const ChatBox = () => {
  const config = {
    width: "300px",
    height: "400px",
    floating: true,
    headerTitle: "Farm Link",
  };

  return <ChatBot steps={steps} {...config} />;
};

export default ChatBox;
