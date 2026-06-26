import { useState } from "react";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (!message) return;

    setMessages([...messages, {
      text: message,
      sender: "user"
    }]);

    setMessage("");
  };

  return (
    <div className="flex h-screen">

      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-4">
        <button className="bg-gray-700 p-2 rounded w-full">
          + New Chat
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">

        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-4 ${
                msg.sender === "user"
                  ? "text-right"
                  : "text-left"
              }`}
            >
              <span className="bg-gray-200 px-4 py-2 rounded">
                {msg.text}
              </span>
            </div>
          ))}
        </div>

        <div className="p-4 border-t flex gap-2">
          <input
            type="text"
            className="flex-1 border p-2 rounded"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            onClick={sendMessage}
            className="bg-black text-white px-4 rounded"
          >
            Send
          </button>
        </div>

      </div>
    </div>
  );
}