import { TextField, Box, Button } from "@mui/material";
import PhotoSizeSelectActualRoundedIcon from "@mui/icons-material/PhotoSizeSelectActualRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

function Input() {
  return (
    <Box component="form">
      <Button variant="text">
        <PhotoSizeSelectActualRoundedIcon />
      </Button>
      <TextField id="text" type="text" placeholder="Aa" variant="outlined" />
      <Button variant="text" type="submit">
        <SendRoundedIcon />
      </Button>
    </Box>
  );
}

export default Input;
