import React, { useEffect, useState } from "react";
import axios from "axios";
import Friend from "./Friend";

export default function FriendsList() {
  const [friendsList, setFriendsList] = useState([]);
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    axios
      .create({
        baseURL: "http://localhost:5000",
        headers: {
          Authorization: `${token}`
        }
      })
      .get("/api/friends")
      .then(({ data }) => {
        setFriendsList(data);
      });
  }, []);
  return (
    <div>
      {friendsList.map(friend => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </div>
  );
}
