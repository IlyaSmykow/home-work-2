import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useSelector, useDispatch } from "react-redux";

const filterIndex = {
  all: 0,
  active: 1,
  completed: 2,
};

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.filterBy);

  const setFilter = (_, newIndex) => {
    const status = Object.keys(filterIndex)[newIndex];
    dispatch({
      type: "SET_FILTER",
      payload: status,
    });
  };
  return (
    <Tabs value={filterIndex[filter]} onChange={setFilter}>
      <Tab label="Все" />
      <Tab label="Активные" />
      <Tab label="Завершённые" />
    </Tabs>
  );
};
