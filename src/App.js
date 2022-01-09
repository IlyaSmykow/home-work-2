import { Paper, Divider, Button, List } from "@mui/material";
import { AddField } from "./components/AddField";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Filter } from "./components/Filter";
import { Item } from "./components/Item";

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const filterBy = useSelector((state) => state.filter.filterBy);
  const [checkBtn, setCheckBtn] = useState(false);

  const checkAll = () => {
    setCheckBtn(true);
    dispatch({
      type: "COMPLETE_ALL",
    });
  };

  const unCheckAll = () => {
    setCheckBtn(false);
    dispatch({
      type: "RESET_ALL",
    });
  };

  const removeAll = () => {
    if (window.confirm("Удалить все записи?")) {
      dispatch({
        type: "REMOVE_ALL",
      });
    }
  };

  return (
    <div className="App">
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h4>Список задач</h4>
        </Paper>
        <AddField />
        <Divider />
        <Filter />
        <List>
          {tasks
            .filter((task) => {
              if (filterBy === "all") {
                return true;
              }
              if (filterBy === "active") {
                return !task.checked;
              }
              if (filterBy === "completed") {
                return task.checked;
              }
            })
            .map((task) => (
              <Item
                key={task.id}
                id={task.id}
                checked={task.checked}
                text={task.text}
              />
            ))}
        </List>
        <Divider />
        <div className="check-buttons">
          {checkBtn ? (
            <Button disabled={!tasks.length} onClick={unCheckAll}>
              Снять отметки
            </Button>
          ) : (
            <Button disabled={!tasks.length} onClick={checkAll}>
              Отметить всё
            </Button>
          )}
          <Button disabled={!tasks.length} onClick={removeAll}>
            Очистить
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;
