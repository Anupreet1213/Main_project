import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#2b2b2b",
  border: "2px solid #000",
  boxShadow: 24,
  color: "white",
  p: 4,
  display: "flex",
  flexDirection :"column",
  alignItems: "center"
};

const style2 = {
    marginBottom : "6%"
}

const boxStyle = {
    width: "20vw",
    padding: "6%",
    backgroundColor: "#383838",
    marginBottom: "2%",
    borderRadius: "15px",
    fontWeight: "600",
    display: "flex",
    justifyContent: "space-between"
}

const ModalSection = ({ handleOpen, open, setOpen }) => {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={style2} id="modal-modal-title" variant="h6" component="h2">
            Connect Wallet
          </Typography>
          <Box sx={boxStyle} >
            <Typography >MetaMask</Typography>
            <i class="fa-solid fa-cloud"></i>
          </Box>
          <Box sx={boxStyle} >
            <Typography >MetaMask</Typography>
            <i class="fa-solid fa-cloud"></i>
          </Box>
          <Box sx={boxStyle} >
            <Typography >MetaMask</Typography>
            <i class="fa-solid fa-cloud"></i>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalSection;
