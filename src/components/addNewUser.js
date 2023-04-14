import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

const AddNewUser = ({ feedData, setFeedData }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();

  const addNewUser = () => {
    let newUser = {
      name: name,
      email: email,
      phone: phoneNumber,
    };
    let newFeedData = [newUser, ...feedData];

    setFeedData(newFeedData);
    setOpenDialog(false);
  };

  return (
    <>
      <div className="newPost">
        <button
          className="createPost"
          onClick={() => {
            setOpenDialog(true);
          }}
        >
          <AddIcon /> Add User
        </button>
      </div>

      <div className="newPostDialog">
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle> Create a Post</DialogTitle>
          <DialogContent>
            <div className="createPostForm">
              <div className="inputContainer">
                <input
                  type="text"
                  placeholder="name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="inputContainer">
                <input
                  type="text"
                  placeholder="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="inputContainer">
                <input
                  type="number"
                  placeholder="phone number"
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                />
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <button onClick={() => setOpenDialog(false)}>Cancel</button>
            <button onClick={addNewUser}>Add User</button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default AddNewUser;
