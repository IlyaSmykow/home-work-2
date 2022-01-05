// import './App.css';
import { Paper, Divider, Button, List, Tabs, Tab } from '@mui/material';
import { AddField } from './components/AddField';
import { Item } from './components/Item';
import { useReducer } from 'react';
import { reducer } from './components/reducer';


function App() {
  const [state, dispatch] = useReducer(reducer, []);  

  return (
    <div className="App">
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h4>Список задач</h4>
        </Paper>
        <AddField dispatch={dispatch}/>
        <Divider />
        <Tabs value={0}>
          <Tab label="Все" />
          <Tab label="Активные" />
          <Tab label="Завершённые" />
        </Tabs>
        <Divider />
        <List>
          {
            state.length > 0 ? state.map(task => <Item 
                                                    key={task.id} 
                                                    id={task.id}
                                                    text={task.text} 
                                                    checked={task.active}
                                                    dispatch={dispatch} />)
            : <p className="list-none">Список задач пуст</p>
          }
        </List>
        <Divider />
        <div className="check-buttons">
          <Button>Отметить всё</Button>
          <Button>Очистить</Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;