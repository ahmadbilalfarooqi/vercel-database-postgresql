"use client";

import React, { useEffect, useState } from "react";

const InputPage = ({ ojb }: any) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [_id, set_id] = useState("");

  const handlePost = async () => {
    await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email }),
    });
  };

  const handleUpdatePost = async () => {
    await fetch("http://localhost:3000/api/users", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, _id }),
    });
  };

  useEffect(() => {
    setEmail(ojb.email);
    setUsername(ojb.username);
    set_id(ojb._id);
  }, [ojb]);

  // first handle submit
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setUsername("");
    setEmail("");
    set_id("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="mb-5 text-black border "
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <br />

        <input
          className="mb-5 text-black border "
          placeholder="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {!_id && (
          <button className="ml-5" type="submit" onClick={handlePost}>
            add
          </button>
        )}
        {_id && (
          <button className="ml-5" type="submit" onClick={handleUpdatePost}>
            edit
          </button>
        )}
      </form>
    </div>
  );
};

export default InputPage;
