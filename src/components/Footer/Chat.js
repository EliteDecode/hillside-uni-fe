import React, { useState } from "react";

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const chatOptions = [
    { title: "Chat with Musa", link: "https://wa.link/fh0igg" },
    { title: "Chat with Mercy", link: "https://wa.link/rc0vob" },
  ];

  return (
    <div className="fixed bottom-[50px] right-[20px]">
      {isOpen && (
        <div className="mb-2 space-y-2">
          {chatOptions.map((option, index) => (
            <a
              key={index}
              href={option.link}
              className="flex items-center space-x-3 px-3 py-2 bg-[#5e0001] rounded-md shadow-lg">
              <span className="text-[12px] font-semibold text-[#f7f7f7]">
                {option.title}
              </span>
              <img
                src={require("../../assets/whatsapp.png")}
                alt="WhatsApp"
                width="25"
              />
            </a>
          ))}
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-3 px-3 py-2 bg-[#5e0001] rounded-md shadow-lg">
        <span className="text-[12px] font-semibold text-[#f7f7f7]">
          {isOpen ? "Close" : "Chat Options"}
        </span>
        {isOpen ? (
          <img src={require("../../assets/close.png")} alt="Close" width="20" />
        ) : (
          <img
            src={require("../../assets/whatsapp.png")}
            alt="WhatsApp"
            width="20"
          />
        )}
      </button>
    </div>
  );
};

export default Chat;
