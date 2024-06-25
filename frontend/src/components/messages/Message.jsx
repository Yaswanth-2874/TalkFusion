import React from "react";

function Message() {
  return (
    <div className={`chat chat-end`}>
      <div className="chat-image avatar">
        <div className="w-12 rounded-full">
          <img
            src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
            alt="user avatar"
          />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-green-500`}>Hello bro</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        11:32
      </div>
    </div>
  );
}

export default Message;
