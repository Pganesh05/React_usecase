import { useForm, SubmitHandler } from "react-hook-form";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addcar } from "./reducer/car";

interface Props {
  setIsDialogOpen: (vaule: boolean) => void;
  isDialogOpen: boolean;
}

interface CarFormInput {
  name: string;
  model: string;
  color: string;
  location: string;
  yearOfManufacture: string;
  kms: string;
  noOfOwners: string;
}

function AddCarDialog({ setIsDialogOpen, isDialogOpen }: Props) {
  const { register, handleSubmit, reset } = useForm<CarFormInput>();
  const dispatch = useDispatch();

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleAddCar: SubmitHandler<CarFormInput> = (data) => {
    const id = Date.now();

    const newImage = {
      id,
      ...data,
    };

    dispatch(addcar(newImage));
    reset();
    setIsDialogOpen(false);
  };

  return (
    <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
      <DialogTitle>Add Car Details</DialogTitle>
      <form onSubmit={handleSubmit(handleAddCar)}>
        <DialogContent>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register("name", { required: "Car Brand is required" })}
          />
          <TextField
            label="Model"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register("model", {
              required: "Car Image Link is required",
            })}
          />
          <TextField
            label="Color"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register("color", {
              required: "Car Image Link is required",
            })}
          />

          <TextField
            label="Location"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register("location", {
              required: "Car Image Link is required",
            })}
          />

          <TextField
            label="Year Of Manufacture"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register("yearOfManufacture", {
              required: "Car Image Link is required",
            })}
          />

          <TextField
            label="Kms"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register("kms", {
              required: "Car Image Link is required",
            })}
          />

          <TextField
            label="No Of Owners"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register("noOfOwners", {
              required: "Car Image Link is required",
            })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">
            Cancel
          </Button>
          <Button type="submit" color="primary" variant="contained">
            Add Car
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default AddCarDialog;
