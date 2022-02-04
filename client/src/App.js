import { useSelector } from 'react-redux';
import './App.scss';

import BirthdayListMenu from './Components/BirthdayListMenu/BirthdayListMenu';
import BirthdayCard from './Components/BirthdayCard/BirthdayCard';
import AddBirthdayMenu from './Components/AddBirthdayMenu/AddBirthdayMenu';
import BirthdaysTodayCard from './Components/BirthdaysTodayCard/BirthdaysTodayCard';

function App() {

  const birthdaysList = useSelector((state) => state.birthdays.value);
  const selectedBirthday = useSelector((state) => state.selectedBirthday.value);

  return (
    <div className="App">
      <BirthdayListMenu list={birthdaysList} />
      <BirthdayCard person={birthdaysList[selectedBirthday]} />
      <BirthdaysTodayCard />
      <AddBirthdayMenu />
    </div>
  );
}

export default App;
