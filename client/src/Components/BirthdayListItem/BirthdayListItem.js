import { useDispatch, useSelector } from 'react-redux';
import { updateBirthdaysList } from '../../Redux/birthdaysListSlice';
import { setSelectedBirthday } from '../../Redux/selectedBirthdaySlice';
import './BirthdayListItem.scss';

export default function BirthdayListItem({ item }) {

    const birthdaysList = useSelector((state) => state.birthdays.value);
    const dispatch = useDispatch();

    const handleDeleteItem = () => {
        const newBirthdaysList = birthdaysList.filter((bday) => bday.id !== item.id);
        dispatch(updateBirthdaysList(newBirthdaysList));
    }

    const handleSelectItem = () => {
        dispatch(setSelectedBirthday(item));
    }
  
    return (
        <div onClick={handleSelectItem} className="BirthdayListItem">
            <div className="BirthdayListItem--MetadataContainer">
                <img className="BirthdayListItem--ProfilePic" src={item.img} alt="profile" />
                <div>
                    <p className="BirthdayListItem--ProfileName">{item.name}</p>
                    <p className="BirthdayListItem--ProfileSubtitle">{item.dob}</p>
                </div>
            </div>
            <button onClick={handleDeleteItem} type="button" className="BirthdayListItem--DeleteBtn">DELETE</button>
        </div>
    );
}
