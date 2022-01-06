import { IconButton, Checkbox, ListItem, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';


export const Item = ({ id, text, checked, dispatch }) => {

  const [completed, setCompleted] = useState(checked);

  const handleCheckbox = () => {
    setCompleted(!completed);
  };

  const deleteTask = id => {
    const answer = window.confirm("Вы точно хотите удалить запись?");
    if(answer) {
      dispatch({
        type: 'DELETE_TASK',
        payload: id
      });
    }
  };

  return (
    <ListItem>
      <div className="d-flex item">
        <Checkbox 
          onChange={handleCheckbox}
          checked={completed}
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