import { useSelector } from 'react-redux';
import './App.scss';

import AppSideMenu from './Components/AppSideMenu/AppSideMenu';

function App() {

  const birthdaysList = useSelector((state) => state.birthdays.value);
  console.log(birthdaysList)
  return (
    <div className="App">
      <AppSideMenu list={birthdaysList} />
    </div>
  );
}

export default App;
