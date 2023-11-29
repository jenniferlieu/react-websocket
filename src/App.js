import Echo from "laravel-echo"; // eslint-disable-next-line
import Pusher from "pusher-js";
import { useEchoStore } from "./useEchoStore";
import WebsocketTester from "./WebsocketTester";

function App() {
  const [echo, setEcho] = useEchoStore((state) => [state.echo, state.setEcho]);

  // Create a websocket instance
  if (!echo) {
    const laravelEcho = new Echo({
      broadcaster: "pusher",
      key: process.env.REACT_APP_PUSHER_APP_KEY,
      cluster: process.env.REACT_APP_PUSHER_CLUSTER,
      forceTLS: true,
    });
    setEcho(laravelEcho);
  }

  if (echo) {
    // Display websocket state messages
    echo.connector.pusher.connection.bind("connected", () => {
      console.log("echo ws connected");
    });
    echo.connector.pusher.connection.bind("disconnected", () => {
      console.log("echo ws disconnected");
      setEcho(null);
    });
  }

  return (
    <main className="p-8">
      <WebsocketTester />
    </main>
  );
}

export default App;
