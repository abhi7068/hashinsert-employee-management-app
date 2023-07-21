// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { query, where } from "firebase/firestore";
import { db } from "../../config/firebase";
import { SnackbarContext } from "../../context/SnackbarContext";

// eslint-disable-next-line react/prop-types
export default function FormDialog({ open, handleClose }) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const usersCollection = collection(db, "users");
  // eslint-disable-next-line no-unused-vars
  const { snackbar, handleSnackbarClose, handleSnackbarOpen } =
    React.useContext(SnackbarContext);

  const createUser = async () => {
    try {
      if (!email) {
        setEmailError("Please enter an email address");
      } else if (!isValidEmail(email)) {
        setEmailError("Please enter a valid email address");
      } else {
        const querySnapshot = await getDocs(
          query(usersCollection, where("email", "==", email))
        );
        if (querySnapshot.empty) {
          console.log("create user with email:", email);
          setEmail("");
          setEmailError("");
          handleClose();
          await addDoc(usersCollection, { email, role: "employee" });
          handleSnackbarOpen("Employee added successfully", "success");
        } else {
          setEmailError("Employee already exists");
          setEmail("");

          handleClose();
          handleSnackbarOpen("Employee already exists", "error");
        }
      }
    } catch (error) {
      console.log(error);
      handleSnackbarOpen("Failed to add employee", "error");
    }
  };

  const isValidEmail = (email) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    setEmailError("");
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Employee</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter employee email address
            here.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={email}
            onChange={handleEmailChange}
            error={!!emailError}
            helperText={emailError}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={createUser}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
