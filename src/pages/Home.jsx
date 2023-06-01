import { useContext, useEffect, useState } from "react";
import Nav from "../components/Nav";
import Notes from "../components/Notes";
import noteContext from "../context/notes/noteContext";
import AddModal from "../components/AddModal";
import Cookies from "js-cookie";

const Home = () => {
  const { notes, getNotes } = useContext(noteContext);
  const [addModal, setAddModal] = useState(false);
  const [sortOrder, setSortOrder] = useState("Ascending");
  const token = Cookies.get("authtoken");
  const sortedNotes = [...notes].sort((a, b) => {
    const x = new Date(a.date);
    const y = new Date(b.date);
    return sortOrder === "Ascending" ? y - x : x - y;
  });

  const toggleOrder = () => {
    setSortOrder((prev) => (prev === "Ascending" ? "Descending" : "Ascending"));
  };
  useEffect(() => {
    getNotes();
  }, [token,getNotes]);
  return (
    <>
      <Nav />
      <div className="homeContainer">
        <div className="homeWrapper">
          <div className="btnContainer">
            <button className="add" onClick={() => setAddModal(true)}>
              ADD NOTE
            </button>
            <button className="toggle" onClick={toggleOrder}>
              {sortOrder}
            </button>
          </div>
          {addModal && <AddModal setAddModal={setAddModal} />}
          {sortedNotes.map((note, index) => {
            return (
              <Notes
                id={note._id}
                key={index}
                title={note.title}
                desc={note.desc}
                tag={note.tag}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
