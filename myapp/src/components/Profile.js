import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { changeName } from "../store/profile/action";

export default function Profile() {
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.profile);
  const [value, setValue] = useState("");

  const handleChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const setName = useCallback(() => {
    value.length && dispatch(changeName(value));
    setValue("");
  }, [dispatch, value]);

  return (
    <Container maxWidth="xl">
      <h1>Страница профиля</h1>

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={3}>
            <TextField
              helperText="Please enter your name"
              id="demo-helper-text-aligned"
              label="Name"
              value={value}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3} md={12}>
            <Button
              onClick={setName}
              variant="contained"
              endIcon={<SendIcon />}
            >
              Change Name
            </Button>
          </Grid>
        </Grid>
      </Box>
      {<div>{name}</div>}
    </Container>
  );
}
