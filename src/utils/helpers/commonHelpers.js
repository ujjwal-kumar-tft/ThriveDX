export const replaceReceiver = (message, receiver, link) => {
  let newMessage = message;
  switch (true) {
    case message.includes("%link%"):
      newMessage = newMessage.replace("%link%", link);
    case message.includes("**%Name**%"):
      newMessage = newMessage.replace("**%Name**%", receiver);
    case message.includes("**%name**%"):
      newMessage = newMessage.replace("**%name**%", receiver);
    case message.includes("%Name%"):
      newMessage = newMessage.replace("%Name%", receiver);
    case message.includes("%Name"):
      newMessage = newMessage.replace("%Name", receiver);
    case message.includes("%name%"):
      newMessage = newMessage.replace("%name%", receiver);
    case message.includes("%name"):
      newMessage = newMessage.replace("%name", receiver);
    case message.includes("[Receiver's Name]"):
      newMessage = newMessage.replace("[Receiver's Name]", receiver);
    case message.includes("<strong>[Receiver's</strong> Name]"):
      newMessage = newMessage.replace(
        "<strong>[Receiver's</strong> Name]",
        `<strong>[Receiver's</strong> ${receiver}]`
      );
    default:
      break;
  }

  return newMessage;
};

export const getError = (error, customMessage = "") => {
  if (error?.message) {
    console.log(error.message);
    return error.message;
  }
  return customMessage;
};



