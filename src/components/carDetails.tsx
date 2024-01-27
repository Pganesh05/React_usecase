import React, { useState } from "react";
import {
  List,
  ListItem,
  Card,
  CardContent,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { useSelector } from "react-redux";
import { selectcars } from "../reducer/car";

function CarDetails() {
  const [selectedBrand, setSelectedBrand] = useState<string>("all");

  const cars = useSelector(selectcars);

  const handleBrandFilterChange = (event: any) => {
    setSelectedBrand(event.target.value as string);
  };

  const filteredCars =
    selectedBrand !== "all"
      ? cars.filter(
          (car) => car.model.toLowerCase() === selectedBrand.toLowerCase()
        )
      : cars;

  return (
    <div className="car-details">
      <div>
        <Typography variant="h2">Car Details</Typography>

        {/* Brand filter */}
        <FormControl fullWidth style={{ marginTop: "16px" }}>
          <Select
            value={selectedBrand || ""}
            label=""
            onChange={handleBrandFilterChange}
          >
            <MenuItem value="all">All Brands</MenuItem>
            {Array.from(new Set(cars.map((car) => car.model))).map((brand) => (
              <MenuItem key={brand} value={brand}>
                {brand}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <List>
          {filteredCars.map((car) => (
            <ListItem key={car.id}>
              <Card style={{ width: 300, height: 50 }}>
                <CardContent>
                  <Typography variant="caption" color="textSecondary">
                    {`Car Brand ${car.name}`}
                  </Typography>
                </CardContent>
              </Card>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}

export default CarDetails;
