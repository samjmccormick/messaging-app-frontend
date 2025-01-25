import { Box } from "@mui/material";

function Message({ message }) {
  return (
    <Box>
      <Box>{message.user}</Box>
      <Box>{message.time}</Box>
      <Box>{message.text}</Box>
    </Box>
  );
}

export default Message;
