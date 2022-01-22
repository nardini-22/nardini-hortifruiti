import { Box, Dialog } from "@material-ui/core";
import { SimpleDialogProps } from "../../@types/dialog";
import { simpleDialogStyles } from "./simpleDialogStyles";

export default function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;
  const handleClose = () => {
    onClose();
  };
  const classes = simpleDialogStyles();
  return (
    <Dialog onClose={handleClose} open={open}>
      <Box className={classes.dialogBox}>{selectedValue}</Box>
    </Dialog>
  );
}
