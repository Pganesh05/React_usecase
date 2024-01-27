import { useState } from "react";
import "../App.css";
import { useImage } from "../context/ImageContext";
import {
  List,
  ListItem,
  Card,
  CardContent,
  Typography,
  Paper,
  Button,
} from "@mui/material";

import AddCarDialog from "../AddCarDialog";

import { useNavigate } from "react-router-dom";

function CarBrands() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { images } = useImage();

  const navigate = useNavigate();

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  return (
    <div className="App">
      <div className="App-header">
        <Paper
          elevation={3}
          style={{ padding: "16px", width: 800, height: 500 }}
        >
          <Typography variant="h2">Car Brands</Typography>
          <List sx={{ display: "flex", flexWrap: "wrap" }}>
            {images.map((image) => (
              <ListItem style={{ width: 150, height: 100 }} key={image.imageID}>
                <Card>
                  <CardContent
                    style={{
                      width: 50,
                      height: 50,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                    onClick={handleOpenDialog}
                  >
                    <Typography variant="caption" color="textSecondary">
                      {`Car ${image.imageID}`}
                    </Typography>
                  </CardContent>
                </Card>
              </ListItem>
            ))}
          </List>

          <Button
            onClick={() => navigate("/car")}
            color="primary"
            variant="contained"
          >
            Filter Redirect
          </Button>
        </Paper>
        <AddCarDialog
          setIsDialogOpen={setIsDialogOpen}
          isDialogOpen={isDialogOpen}
        ></AddCarDialog>
      </div>
    </div>
  );
}

export default CarBrands;
