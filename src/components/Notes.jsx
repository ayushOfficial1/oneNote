import { Delete, Edit } from "@mui/icons-material";
import noteContext from "../context/notes/noteContext";
import { useContext, useState } from "react";
import EditModal from "./EditModal";

const Notes = ({ title, desc, tag, id }) => {
  const { deletenote } = useContext(noteContext);
  const [open, setOpen] = useState(false);

  return (
    <div className="notesContainer">
      <div className="notesWrapper">
        <div className="notesHeader">
          <h3>{title}</h3>
          <div className="notesIcons">
            <Delete
              id="delete"
              onClick={() => {
                deletenote(id);
              }}
            />
            <Edit id="edit" onClick={() => setOpen(true)} />
            {open && <EditModal setOpen={setOpen} id={id} />}
          </div>
        </div>
        <div className="notesBody">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Notes;
