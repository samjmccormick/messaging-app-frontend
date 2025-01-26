import { Container, Paper } from "@mui/material";
import Message, { TypeMessage } from "./message";
import Input from "./input";

export type MessagesArray = Array<TypeMessage>;

function Conversation({ messages }: { messages: MessagesArray }) {
  return (
    <Paper className="conversationPage">
      <Container>
        {messages.map((message: TypeMessage) => (
          <Message message={message} />
        ))}
        <Input />
      </Container>
    </Paper>
  );
}

export default Conversation;
