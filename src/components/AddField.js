import { TextField, Button, Checkbox } from '@mui/material';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  text: yup.string().required('Заполните поле!'),
}).required();


export const AddField = ({dispatch}) => {

  const [checked, setChecked] = useState(false);

  const { register, handleSubmit, reset, formState:{ errors } } = useForm({
    defaultValues: {
      active: false,
      text: ''
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    dispatch({type: 'ADD_TASK', payload: data});
    reset();
    setChecked(false);
  };
  
  const handleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <div className="field">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <Checkbox
          {...register("active")}
          className="checkbox"
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleIcon />}
          checked={checked}
          onChange={handleCheckbox}
        />
        <TextField 
          {...register("text")}
          placeholder="Введите текст задачи..." 
          variant="standard" 
          fullWidth 
        />
        <p>{errors.text?.message}</p>
        <Button type="submit">
          <AddIcon />
        </Button>
      </form>
    </div>
  );
};