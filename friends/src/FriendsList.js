import React, { useEffect, useState } from "react";
import axios from "axios";
import Friend from "./Friend";
import FriendForm from "./FriendForm";

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

  function postFriend(friend, resetForm) {
    const token = window.localStorage.getItem("token");
    axios
      .create({
        baseURL: "http://localhost:5000",
        headers: {
          Authorization: `${token}`
        }
      })
      .post("/api/friends", friend)
      .then(({ data }) => {
        setFriendsList(data);
        resetForm();
      });
  }
  return (
    <div>
      <FriendForm post={postFriend} />
      {friendsList.map(friend => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </div>
  );
}
