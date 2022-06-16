import {
  Box,
  Button,
  Card,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import { palette } from "@mui/system";
import React, { useState } from "react";

function AddProduct() {
  const [category, setCategory] = React.useState("");
  const [open, setOpen] = useState(false);
  const [SnackbarMessage, setSnackbarMessage] = useState(false);
  const [severity, setSeverity] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [rent_amount, setRentAmount] = useState(0);
  const [address, setAddress] = useState("");
  const [security_deposit, setDeposit] = useState(0);
  const [available, setAvailableFor] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [image, setImage] = useState([]);

  const handleChange = (event) => {
    setCategory(event.target.value);
    setCoupon(event.target.value);
  };

  function onImageChange(e) {
    setImage([...e.target.files]);
  }

  const formValidation = () => {
    console.log(name + description + quantity + rent_amount);
    if (
      category.length > 0 &&
      coupon.length > 0 &&
      name.length > 0 &&
      description.length > 0 &&
      quantity > 0 &&
      rent_amount > 0 &&
      address.length > 0 &&
      (security_deposit > 0) & (available > 0)
    ) {
      setSnackbarMessage("Equipment Added Successfully!!");
      setSeverity("success");
      setOpen(true);
    } else {
      setSnackbarMessage("Please fill all the required fields");
      setSeverity("error");
      setOpen(true);
    }
  };

  return (
    <div className="background" flexDirection="row">
      <div className="main" flexDirection="row">
        <Card
          component={"form"}
          className="card1"
          sx={{ flexDirection: "row" }}
        >
          <Snackbar open={open} autoHideDuration={6000}>
            <Alert severity={severity} sx={{ width: "100%" }}>
              {SnackbarMessage}
            </Alert>
          </Snackbar>

          <Typography
            variant="h3"
            component="div"
            gutterBottom
            className="header"
          >
            Add Equipment
          </Typography>

          <div className="row">
            <div className="row">
              <div className="col-lg-6">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Name"
                  value={name}
                  variant="outlined"
                  sx={{ margin: "3%" }}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="col-lg-6">
                <FormControl fullWidth sx={{ margin: "3%" }} required>
                  <InputLabel id="demo-simple-select-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    label="Category"
                    onChange={handleChange}
                  >
                    <MenuItem value={"Agricultural_equipment"}>
                      Agricultural equipment
                    </MenuItem>
                    <MenuItem value={"Audio_equipment"}>
                      Audio equipment
                    </MenuItem>
                    <MenuItem value={"Electrical_equipment"}>
                      Electrical equipment
                    </MenuItem>
                    <MenuItem value={"Hiking_equipment"}>
                      Hiking equipment
                    </MenuItem>
                    <MenuItem value={"Medical_equipment"}>
                      Medical equipment
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>

          <div className="row">
            <Button
              className="uploadImage"
              variant="outlined"
              onChange={onImageChange}
              accept="image"
              value={image}
              sx={{ margin: "3%", height: "55px", width: 614 }}
            >
              {" "}
              <input type="file" required />{" "}
            </Button>
          </div>

          <div className="row">
            <TextField
              fullWidth
              variant="outlined"
              label="Description"
              value={description}
              multiline
              aria-label="minimum height"
              minRows={4}
              placeholder="Enter Description"
              sx={{ width: 614, height: 140, margin: "3%" }}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="row">
            <div className="row">
              <div className="col-lg-6">
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Quantity"
                  value={quantity}
                  inputProps={{ type: "number" }}
                  sx={{ margin: "3%" }}
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                />
              </div>
              <div className="col-lg-6">
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Rent Amount"
                  value={rent_amount}
                  inputProps={{ type: "number" }}
                  sx={{ margin: "3%" }}
                  onChange={(e) => setRentAmount(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row">
            <TextField
              variant="outlined"
              label="Address"
              value={address}
              multiline
              aria-label="minimum height"
              minRows={4}
              placeholder="Enter Address"
              onChange={(e) => setAddress(e.target.value)}
              sx={{ width: 614, height: 140, margin: "3%" }}
              required
            />
          </div>

          <div className="row">
            <div className="row">
              <div className="col-lg-6">
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Security Deposit"
                  value={security_deposit}
                  inputProps={{ type: "number" }}
                  sx={{
                    margin: "3%",
                    pattern: "[0-9]",
                  }}
                  onChange={(e) => setDeposit(e.target.value)}
                  required
                />
              </div>
              <div className="col-lg-6">
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Available for"
                  value={available}
                  inputProps={{ type: "number" }}
                  sx={{
                    margin: "3%",
                    pattern: "[0-9]",
                  }}
                  onChange={(e) => setAvailableFor(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row">
            <FormControl fullwidth sx={{ margin: "3%", width: 618 }} required>
              <InputLabel id="demo-simple-select-label">Coupon</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={coupon}
                label="Coupon"
                onChange={handleChange}
              >
                <MenuItem value={"Percent-off coupon"}>
                  Percent-off Coupon
                </MenuItem>
                <MenuItem value={"Free gift with rent"}>
                  Free Gift with Rent
                </MenuItem>
                <MenuItem value={"BOGO coupon"}>BOGO Coupon</MenuItem>
                <MenuItem value={"Mystery deals"}>Mystery deals</MenuItem>
              </Select>
            </FormControl>
          </div>

          <Box>
            <Button
              className="buttonHover"
              type="Submit"
              onClick={formValidation}
              variant="contained"
              sx={{
                margin: "4%",
                color: "white",
                bgcolor: "text.secondary",
                hover: "#6c757d",
              }}
            >
              Submit
            </Button>
          </Box>
        </Card>
      </div>
    </div>
  );
}

export default AddProduct;
