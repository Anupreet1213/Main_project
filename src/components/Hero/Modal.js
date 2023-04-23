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
  // border: "2px solid #000",
  boxShadow: 24,
  color: "white",
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  outline: "none",
  borderRadius: "12px",
};

const style2 = {
  marginBottom: "6%",
  display: "flex",
  alignItems: "center",
  width: "20vw",
  justifyContent: "space-between",

  "@media (max-width: 568px)": {
    width: "60vw",
  },
  "@media (min-width: 569px) and (max-width: 1050px)": {
    width: "40vw",
  },
};

const boxStyle = {
  width: "20vw",
  padding: "6%",
  backgroundColor: "#383838",
  marginBottom: "2%",
  borderRadius: "15px",
  fontWeight: "600",
  display: "flex",
  justifyContent: "space-between",

  "@media (max-width: 568px)": {
    width: "60vw",
  },
  "@media (min-width: 569px) and (max-width: 968px)": {
    width: "40vw",
  },
};

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
          <Typography
            sx={style2}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            <Typography>Connect Wallet</Typography>
            <i
              class="fa fa-close"
              style={{ cursor: "pointer" }}
              onClick={handleClose}
            ></i>
          </Typography>
          <Box sx={boxStyle}>
            <Typography>MetaMask</Typography>
            <i class="fa-solid fa-cloud"></i>
          </Box>
          <Box sx={boxStyle}>
            <Typography>MetaMask</Typography>
            <i class="fa-solid fa-cloud"></i>
          </Box>
          <Box sx={boxStyle}>
            <Typography>MetaMask</Typography>
            <i class="fa-solid fa-cloud"></i>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalSection;
