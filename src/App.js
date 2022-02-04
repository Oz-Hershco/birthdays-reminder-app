import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';

import BirthdayListMenu from './Components/BirthdayListMenu/BirthdayListMenu';
import BirthdayCard from './Components/BirthdayCard/BirthdayCard';
import AddBirthdayMenu from './Components/AddBirthdayMenu/AddBirthdayMenu';
import UpcomingBirthdaysCard from './Components/UpcomingBirthdaysCard/UpcomingBirthdaysCard';
import { updateBirthdaysList } from './Redux/birthdaysListSlice';

function App() {

  const birthdaysList = useSelector((state) => state.birthdays.value);
  const selectedBirthday = useSelector((state) => state.selectedBirthday.value);

  const dispatch = useDispatch();

  useEffect(() => {
    const locallyStoredBirthdayList = JSON.parse(localStorage.getItem("birthdaysList"));
    if (locallyStoredBirthdayList) {
      dispatch(updateBirthdaysList(locallyStoredBirthdayList));
    }
    return () => {

    };
  }, []);


  return (
    <div className="App">
      <BirthdayListMenu list={birthdaysList} />
      <BirthdayCard person={birthdaysList[selectedBirthday]} />
      <UpcomingBirthdaysCard />
      <AddBirthdayMenu />
    </div>
  );
}

export default App;
