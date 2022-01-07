import { Item } from "./Item";
import List from "@mui/material/List";
import { useState, useEffect } from "react";

export const ListComponent = ({ state, dispatch, type }) => {
  const [data, setData] = useState(state);
  const [info, setInfo] = useState("");

  useEffect(() => {
    if (state && type === "all") {
      setData(state);
      setInfo("список задач пуст");
    } else if (state && type === "active") {
      setData(state.filter((el) => el.checked === false));
      setInfo("нет активных задач");
    } else if (state && type === "completed") {
      setData(state.filter((el) => el.checked === true));
      setInfo("нет завершённых задач");
    }
  }, [type, state]);

  return (
    <List>
      {data.length > 0 ? (
        data.map((task) => (
          <Item
            key={task.id}
            id={task.id}
            text={task.text}
            checked={task.checked}
            dispatch={dispatch}
          />
        ))
      ) : (
        <p className="list-none">{info}</p>
      )}
    </List>
  );
};
