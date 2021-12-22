import React from "react";

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://i.ytimg.com//vi/q22uHBl9qxw/sddefault.jpg)",
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">Un nuevo día</p>
        <p className="journal__entry-content">Lorem asdasdadsfasdfasdfasdfasdfasdfasdfsadfasd
        asdfasdfasdfasdfasdfdsaf </p>
      </div>
      <div className="journal__entry-date">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};
