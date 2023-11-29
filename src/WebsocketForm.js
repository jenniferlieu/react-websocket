function WebSocketForm({ onSubmit }) {
  function handleSubmit(e) {
    e.preventDefault();
    const formJson = Object.fromEntries(new FormData(e.target).entries());
    onSubmit({
      channel: formJson["channel"],
      event: formJson["event"],
    });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-row space-x-4 justify-center">
      {/* input */}
      <div className="flex flex-col">
        <label htmlFor="channel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Channel Name
        </label>
        <input type="text" name="channel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="new-beacon" required />
      </div>

      {/* input */}
      <div className="flex flex-col">
        <label htmlFor="event" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Event Name
        </label>
        <input type="text" name="event" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="BeaconCreated" required />
      </div>

      {/* submit button */}
      <button type="submit" className="py-1 px-4 rounded-lg border border-transparaent text-base font-medium bg-gray-100 curser-pointer transition duration-250 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
        Connect Websocket Channel
      </button>
    </form>
  );
}

export default WebSocketForm;
