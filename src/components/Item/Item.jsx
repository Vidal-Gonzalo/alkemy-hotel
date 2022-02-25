import React, { useState, useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DoneIcon from "@mui/icons-material/Done";
import { Button, CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import "./Item.css";
import Axios from "axios";
import { Menu } from "../../context/MenuContext";

export default function Item({ item }) {
  const [open, setOpen] = useState(false);
  const [itemDetail, setItemDetail] = useState([]);
  const [itemAdded, setItemAdded] = useState(false);
  const { addItem } = useContext(Menu);

  const handleOpen = () => {
    setOpen(true);
    try {
      Axios.get(
        `https://api.spoonacular.com/recipes/${item.id}/information?apiKey=24d09563ef874bc18d782542386ff011`
      ).then((response) => {
        setItemDetail(response.data);
      });
    } catch (error) {
      setItemDetail(error);
    }
  };
  const handleClose = () => setOpen(false);

  const handlePurchase = () => {
    addItem({
      id: itemDetail.id,
      title: itemDetail.title,
      healthScore: itemDetail.healthScore,
      readyInMinutes: itemDetail.readyInMinutes,
      price: itemDetail.pricePerServing,
      vegan: itemDetail.vegan,
      img: item.image,
    });
    setItemAdded(true);
  };

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
              <>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Precio: ${itemDetail.pricePerServing} <br />
                  Tiempo de preparación: {
                    itemDetail.readyInMinutes
                  } minutos <br />
                  HealthScore: {itemDetail.healthScore} <br />
                  Vegano: {itemDetail.vegan ? "Sí" : "No"} <br />
                </Typography>
                <Typography mt={2}>
                  {itemAdded ? (
                    <Button
                      variant="contained"
                      disabled
                      color="error"
                      startIcon={<DoneIcon />}
                    >
                      Elemento agregado al menú
                    </Button>
                  ) : (
                    <Button variant="contained" onClick={handlePurchase}>
                      Agregar a mi menú
                    </Button>
                  )}
                </Typography>
              </>
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
