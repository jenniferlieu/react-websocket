import { useEffect, useState } from "react";
import WebSocketForm from "./WebsocketForm";
import Table from "./Table";
import { useEchoStore } from "./useEchoStore";

function WebsocketTester() {
  const [array, setArray] = useState([]);
  const [channelInput, setChannelInput] = useState("new-beacon");
  const [eventInput, setEventInput] = useState("BeaconCreated");
  const echo = useEchoStore((state) => state.echo);
  const [channel, setChannel] = useEchoStore((state) => [state.channel, state.setChannel]);
  const [channelName, setChannelName] = useEchoStore((state) => [state.channelName, state.setChannelName]);

  // useEffect(() => {
  //   // Connect to a public websocket channel
  //   if (echo) {
  //     if (channel) {
  //       echo.leaveChannel(channelName);
  //       setChannel(echo.channel(channelInput));
  //       setChannelName(channelInput);
  //       channel.listen(eventInput, (e) => {
  //         console.log(e);
  //       });
  //     } else {
  //       if (channelName) {
  //         setChannel(echo.channel(channelInput));
  //         setChannelName(channelInput);
  //       } else {
  //         setChannelName("new-beacon");
  //       }
  //     }
  //   }
  // }, [channelInput]);

  echo.channel(channelInput).listen(eventInput, (event) => {
    console.log(channelInput, event);
  });

  return (
    <>
      {/* instructions */}
      <div className="pb-20 text-center">
        {/* heading */}
        <h2 className="text-4xl font-extrabold dark:text-white">Laravel Echo Websocket Tester</h2>
        <p className="my-4 text-lg text-gray-500">Mock frontend to test websockets sent from Laravel.</p>

        {/* usage */}
        <div>
          <h4 className="text-2xl font-bold">Usage:</h4>
          <ol className="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>Set the channel name and event name</li>
            <li>Make an API call that's associated with the event</li>
            <li>Come back here to check if data was received. Newest data is displayed at the top of the table.</li>
          </ol>
          <p className="text-lg pt-6">
            Data sent through the websocket must be an object. <br />
            Sample JSON object: <br />
            <code dangerouslySetInnerHTML={{ __html: `{'message': {'hello': 'hello world','bye': 'bye world'}}` }}></code>
          </p>
        </div>
      </div>
      <WebSocketForm
        onSubmit={(formData) => {
          setChannelInput(formData.channel);
          setEventInput(formData.event);
        }}
      />
      <Table objArray={array.length > 0 ? array : undefined} channelName={channelInput || undefined} event={eventInput || undefined} isConnected={channel ? true : false} />
    </>
  );
}

export default WebsocketTester;
