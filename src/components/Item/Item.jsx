import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import "./Item.css";
import Axios from "axios";

export default function Item({ item }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const [itemDetail, setItemDetail] = useState([]);
  const handleOpen = () => {
    setOpen(true);
    try {
      Axios.get(
        `https://api.spoonacular.com/recipes/${item.id}/information?apiKey=39f22c62f0244c13a532e3162e00e7cc`
      ).then((response) => {
        setItemDetail(response.data);
      });
    } catch (error) {
      setItemDetail(error);
    }
  };

  console.log(itemDetail);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card className="item" sx={{ maxWidth: 300 }}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia component="img" image={item.image} alt={item.title} />
          <CardContent>
            <Typography gutterBottom variant="p" component="div">
              {item.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {item.title}
            </Typography>
            {Object.keys(itemDetail).length > 0 ? (
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Precio: ${itemDetail.pricePerServing} <br />
                Tiempo de preparación: {itemDetail.readyInMinutes} minutos{" "}
                <br />
                HealthScore: {itemDetail.healthScore} <br />
                Vegano: {itemDetail.vegan ? "Sí" : "No"}
              </Typography>
            ) : (
              <Typography id="modal-modal-error" sx={{ mt: 2 }}>
                Cargando...
              </Typography>
            )}
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
