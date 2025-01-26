import Grid2 from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import "./App.css";
import Chats from "./components/chatsPage/chatsPage";
import Conversation from "./components/conversationPage/conversationPage";

function App() {
  const testMessages = [
    {
      id: 1,
      user: "User 1",
      time: new Date(),
      text: "Hello, World!",
      avatar: "https://robohash.org/f",
    },
    {
      id: 2,
      user: "User 2",
      time: new Date(),
      text: "Hello, World!",
      avatar: "https://robohash.org/fas",
    },
    {
      id: 3,
      user: "User 3",
      time: new Date(),
      text: "Hello, World!",
      avatar: "https://robohash.org/fafsds",
    },
    {
      id: 1,
      user: "User 1",
      time: new Date(),
      text: "Hello, World!",
      avatar: "https://robohash.org/f",
    },
  ];

  const testChats = [
    {
      id: 1,
      userName: "User 1",
      avatar: "https://robohash.org/f",
      last_message: "Hello, World!",
    },
    {
      id: 2,
      userName: "User 2",
      avatar: "https://robohash.org/fas",
      last_message: "Hello, World!",
    },
    {
      id: 3,
      userName: "User 3",
      avatar: "https://robohash.org/fafsds",
      last_message: "Hello, World!",
    },
  ];

  return (
    <>
      <Container>
        <Grid2 container spacing={2}>
          <Grid2 size={6}>
            <Chats chats={testChats} />
          </Grid2>
          <Grid2 size={6}>
            <Conversation messages={testMessages} />
          </Grid2>
        </Grid2>
      </Container>
    </>
  );
}

export default App;
