import {
  Box,
  Button,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";

import React, { useState } from "react";

function AddProduct() {
  const [category, setCategory] = React.useState("");
  const [open, setOpen] = useState(false);
  const [SnackbarMessage, setSnackbarMessage] = useState(false);
  const [severity, setSeverity] = useState("");
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [expiry_date, setExpiryDate] = useState(0);
  const [coupon_amount, setCouponAmount] = useState(0);
  const [coupon, setCoupon] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
    setCoupon(event.target.value);
  };

  const formValidation = () => {
    console.log(code + description + expiry_date + coupon_amount);
    if (
      category.length > 0 &&
      coupon.length > 0 &&
      code.length > 0 &&
      description.length > 0 &&
      coupon_amount > 0
    ) {
      setSnackbarMessage("Coupon created Successfully!!");
      setSeverity("success");
      setOpen(true);
    } else {
      setSnackbarMessage("Please fill all the required fields");
      setSeverity("error");
      setOpen(true);
    }
  };

  return (
    <div class="background" flexDirection="row">
      <div className="main" flexDirection="row">
        <Card
          component={"form"}
          className="card1"
          sx={{ flexDirection: "row", height: "37vw" }}
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
            Create Coupon
          </Typography>

          <div className="row">
            <div className="row">
              <div className="col-lg-6">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Coupon-code"
                  value={code}
                  variant="outlined"
                  sx={{ margin: "3%" }}
                  onChange={(e) => setCode(e.target.value)}
                  required
                />
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <FormControl
                    fullwidth
                    sx={{ margin: "3%", width: 618 }}
                    required
                  >
                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
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
              </div>
            </div>
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
              sx={{ width: 625, height: 140, margin: "3%" }}
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
                  label="Expiry Date"
                  value={expiry_date}
                  inputProps={{ type: "date" }}
                  sx={{ margin: "3%" }}
                  InputLabelProps={{ shrink: true }}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  required
                />
              </div>
              <div className="col-lg-6">
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Coupon Amount"
                  value={coupon_amount}
                  inputProps={{ type: "number" }}
                  sx={{ margin: "3%" }}
                  onChange={(e) => setCouponAmount(e.target.value)}
                  required
                />
              </div>
            </div>
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
              ADD COUPON
            </Button>
          </Box>
        </Card>
      </div>
    </div>
  );
}

export default AddProduct;
