import PropTypes from "prop-types";
import React from "react";

/**
 *
 * Component that dynamically generates a table from an array of objects
 * @param {string} title - table title
 * @param {array} objArray - array of objects used for the table rows
 * @return {React.JSX.Element} react component
 */
function Table({ objArray, channelName, event, isConnected }) {
  const arrayLength = objArray.length;
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          <div className="flex space-x-4">
            <p>Channel: {channelName}</p>
            <p>Event: {event}</p>
            <p>{isConnected ? "Connected" : "Not Connected"}</p>
          </div>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">To change the table, fire a websocket event.</p>
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              No.
            </th>
            {/* For every key inside the object, create a column with the object key name */}
            {Object.keys(objArray[0]).map((objKey, index) => {
              return (
                <th key={index} scope="col" className="px-6 py-3">
                  {objKey}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {/* For every object in the array, create a row for the object */}
          {objArray.map((objItem, index) => {
            return (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td key={index} className="px-6 py-4">
                  {arrayLength - index}
                </td>
                {/* For every object, create a column and fill it with the value */}
                {Object.values(objItem).map((value, index) => {
                  return (
                    <td key={index} className="px-6 py-4">
                      {value}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// Define prop types
Table.propTypes = {
  objArray: PropTypes.arrayOf(PropTypes.object).isRequired,
  channelName: PropTypes.string.isRequired,
  event: PropTypes.string.isRequired,
};

Table.defaultProps = {
  objArray: [
    {
      user_id: "pikachu",
      body: "pika pika!!",
    },
    {
      user_id: "charzard",
      body: "char! chaarr!!!",
    },
  ],
  channelName: "sample-channel",
  event: "sample-event",
  channel: false,
};

export default Table;
