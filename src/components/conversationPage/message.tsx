import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

export interface TypeMessage {
  user: string;
  time: Date;
  text: string;
  avatar: string;
}

function Message({ message }: { message: TypeMessage }) {
  return (
    <Box>
      <Avatar src={message.avatar} />
      <Box>{message.user}</Box>
      <Box>{message.time.toDateString()}</Box>
      <Box>{message.text}</Box>
    </Box>
  );
}

export default Message;
