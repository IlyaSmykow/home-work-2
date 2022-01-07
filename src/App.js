import { Paper, Divider, Button } from "@mui/material";
import { AddField } from "./components/AddField";
import { useState, useReducer } from "react";
import { reducer } from "./components/reducer";
import TabComponent from "./components/TabComponent";

function App() {
  const [state, dispatch] = useReducer(reducer, []);
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
        <AddField dispatch={dispatch} />
        <Divider />
        <TabComponent state={state} dispatch={dispatch} />
        <Divider />
        <Divider />
        <div className="check-buttons">
          {checkBtn ? (
            <Button onClick={unCheckAll}>Снять отметки</Button>
          ) : (
            <Button onClick={checkAll}>Отметить всё</Button>
          )}
          <Button onClick={removeAll}>Очистить</Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;
