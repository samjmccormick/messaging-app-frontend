import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

//need to decide how I want to organize chats/inboxes
//they should all have a name (but probably not userName), and an avatar
//going to use this for now
export interface TypeChat {
  userName: string;
  avatar: string;
  last_message: string;
}

function Chat({ chat }: { chat: TypeChat }) {
  return (
    <Box className="chat" sx={{ backgroundColor: "primary.dark" }}>
      <Avatar src={chat.avatar} />
      <Box>
        <h3>{chat.userName}</h3>
        <Box>{chat.last_message}</Box>
      </Box>
    </Box>
  );
}

export default Chat;
