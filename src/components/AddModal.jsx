import { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddModal = ({ setAddModal }) => {
  const { addnote } = useContext(noteContext);
  const [details, setDetails] = useState({ title: "", desc: "", tag: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
    addnote( details );
    setAddModal(false);
  };

  return (
    <div className="modalContainer">
      <div className="modalWrapper">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={details.title}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Description"
            name="desc"
            value={details.desc}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Tag"
            name="tag"
            value={details.tag}
            onChange={handleChange}
          />
          <div className="btnContainer">
            <button type="submit" id="update">
              Add
            </button>
            <button id="cancel" onClick={() => setAddModal(false)}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddModal;
