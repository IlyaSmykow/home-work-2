import { IconButton, Checkbox, ListItem, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useDispatch } from "react-redux";

export const Item = ({ id, checked, text }) => {
  const dispatch = useDispatch();
  const handleCheckbox = (id) => {
    dispatch({
      type: "TOGGLE_COMPLETE",
      payload: id,
    });
  };

  const deleteTask = (id) => {
    if (window.confirm("Удалить запись?")) {
      dispatch({
        type: "DELETE_TASK",
        payload: id,
      });
    }
  };

  return (
    <ListItem>
      <div className="d-flex item">
        <Checkbox
          onChange={() => handleCheckbox(id)}
          checked={checked}
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleIcon />}
        />
        <Typography className="item-text">{text}</Typography>
        <div className="item-buttons d-flex">
          <IconButton>
            <EditIcon style={{ fontSize: 20 }} />
          </IconButton>
          <IconButton onClick={() => deleteTask(id)}>
            <DeleteOutlineIcon style={{ fontSize: 20 }} />
          </IconButton>
        </div>
      </div>
    </ListItem>
  );
};
