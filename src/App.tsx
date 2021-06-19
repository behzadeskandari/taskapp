import React,{FC} from 'react';
import './App.css';
import Headers from './components/Header';
import { useSelector } from 'react-redux';
import Sidebar from './components/Sidebar';
import Notification from './components/Notification';
import { RootState } from './store/store';
import DeleteListModal from './components/DeleteListModal';

const App : FC = () => {
  const notificationMsg = useSelector((state: RootState)=> state.notification.message);
  const listIdToDelete = useSelector((state: RootState) => state.list.listIdToDelete);

  console.log(notificationMsg,'notificationMsg');
  return (
    <div className="App">
      <Headers title="Task List App" subtitle="Create Some Awosome List Task and Add Some Task"/>
      <div className="container px-5">
          <div className="columns">
            <Sidebar/>
          </div>
      </div>
      <Notification msg={notificationMsg} />
      {listIdToDelete && <DeleteListModal listId={listIdToDelete} />}
    </div>
  );
}

export default App;
