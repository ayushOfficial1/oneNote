import axios from "axios";
import noteContext from "./noteContext";
import { useState } from "react";
import Cookies from "js-cookie";

const NoteState = (props) => {
  const [notes, setnotes] = useState([]);
  const headers = { "auth-token": Cookies.get("authtoken") };

  const getNotes = async () => {
    try {
      const result = await axios.get(
        "https://onenote-backend.onrender.com/api/notes/",
        {
          headers,
        }
      );
      console.log(result.data);
      setnotes(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addnote = async (note) => {
    try {
      const result = await axios.post(
        "https://onenote-backend.onrender.com/api/notes/",
        note,
        { headers }
      );
      console.log(result.data.newuser);
      alert(result.data.msg);
      getNotes();
    } catch (error) {
      console.log({ error });
    }
  };
  const deletenote = async (id) => {
    try {
      const result = await axios.delete(
        `https://onenote-backend.onrender.com/api/notes/${id}`,
        {
          headers,
        }
      );
      console.log(result.data);
      alert("Note Deleted");
      getNotes();
    } catch (error) {
      console.log({ error });
    }
  };
  const editnote = async ({ details, id }) => {
    try {
      const result = await axios.put(
        `https://onenote-backend.onrender.com/api/notes/${id}`,
        details,
        {
          headers,
        }
      );
      console.log(result.data);
      alert("Note Updated");
      getNotes();
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <noteContext.Provider
      value={{ notes, addnote, deletenote, editnote, getNotes }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
