import "./App.css";
import Conversation from "./components/conversation/conversation";

function App() {
  const testMessages = [
    {
      id: 1,
      user: "User 1",
      time: new Date(),
      text: "Hello, World!",
    },
    {
      id: 1,
      user: "User 1",
      time: new Date(),
      text: "Hello, World!",
    },
    {
      id: 1,
      user: "User 1",
      time: new Date(),
      text: "Hello, World!",
    },
    {
      id: 1,
      user: "User 1",
      time: new Date(),
      text: "Hello, World!",
    },
  ];

  return (
    <>
      <Conversation messages={testMessages} />
    </>
  );
}

export default App;
