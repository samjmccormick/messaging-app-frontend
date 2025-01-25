import { Container } from "@mui/material";
import Message from "./message";
import Input from "./input";

interface Message {
  user: string;
  time: Date;
  text: string;
}

type Messages = Array<Message>;

function Conversation({ messages }: { messages: Messages }) {
  return (
    <Container>
      {messages.map((message: Message) => (
        <Message message={message} />
      ))}
      <Input />
    </Container>
  );
}

export default Conversation;
