import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const MyButton = ({label}) => {
  const theme = useTheme();
  return (
    <Button
      variant="outlined"
      sx={{
        color: theme.palette.text.header_option,
        borderColor: theme.palette.text.header_option,
        // "&:hover": {
        //   backgroundColor: "#1565c0",
        // },
      }}
    >
      {label}
    </Button>
  );
};

export default MyButton;
