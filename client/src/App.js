import { useSelector } from 'react-redux';
import './App.scss';

import AppSideMenu from './Components/AppSideMenu/AppSideMenu';
import BirthdayCard from './Components/BirthdayCard/BirthdayCard';

function App() {

  const birthdaysList = useSelector((state) => state.birthdays.value);
  const selectedBirthday = useSelector((state) => state.selectedBirthday.value);

  return (
    <div className="App">
      <AppSideMenu list={birthdaysList} />
      <BirthdayCard person={birthdaysList[selectedBirthday]} />
    </div>
  );
}

export default App;
