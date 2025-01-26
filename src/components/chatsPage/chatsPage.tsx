import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Chat, { TypeChat } from "./chat";
import { Grid2 } from "@mui/material";

export type ChatsArray = Array<TypeChat>;

function Chats({ chats }: { chats: ChatsArray }) {
  return (
    <Paper className="chatsPage">
      <Container>
        <h1>Chats</h1>
        <Grid2 container spacing={1}>
          {chats.map((chat: TypeChat) => (
            <Grid2 size={12} key={chat.userName}>
              <Chat chat={chat} />
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Paper>
  );
}

export default Chats;
