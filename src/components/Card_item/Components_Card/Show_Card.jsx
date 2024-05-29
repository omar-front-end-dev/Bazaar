import { Box, Dialog, DialogActions, IconButton, } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Show_Product_Details } from "../../main/Components_Main/Show_Product_Details";
import { PropTypes } from "prop-types"

export const Show_Card = ({ product }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box
      className="show__Product"
      sx={{ position: "absolute", transition: "0.3s" }}
    >
      <IconButton size="small" onClick={handleClickOpen}>
        <VisibilityIcon sx={{ fontSize: "20px", color: "#D23F57" }} />
      </IconButton>
      <Dialog
        sx={{".MuiPaper-root" : {minWidth: {xs: "95%", md: "900px" }}}}
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
      <DialogActions>
        <IconButton onClick={handleClose}
        className={"Close__Drawer"}
        sx={{ "&:hover": { color: "#D23F57" } }}
        >
          <CloseIcon/>
        </IconButton>
      </DialogActions>
        <Show_Product_Details product={product}/>
      </Dialog>
    </Box>
  );
};

Show_Card.propTypes = {
  product: PropTypes.object,
};
