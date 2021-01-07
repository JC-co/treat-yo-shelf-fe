import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "@material-ui/core";
import "./TransitionsModalSearch.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: "center",
    textTransform: "capitalize",
  },
}));

export default function TransitionsModalSearch(props) {
  const { title, author, image } = props.book;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        component={Link}
        to="/book"
        variant="outlined"
        size="medium"
        onClick={handleOpen}
      >
        View
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className="modal-content">
              <img alt="book" src={image}></img>
              <div className="modal-book-info">
                <p>{title}</p>
                <p>{author}</p>
                <div className="user-info">
                  <p>Username</p>
                  <Button variant="outlined" size="medium" color="primary">
                    View
                  </Button>
                </div>
              </div>
            </div>

            {/* <div className="modal-footer">
              <h2 id="transition-modal-title">{title}</h2>
              <p id="transition-modal-description">{author}</p>
            </div> */}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}