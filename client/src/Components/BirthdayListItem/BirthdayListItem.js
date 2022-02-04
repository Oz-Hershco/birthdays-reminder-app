import { useDispatch, useSelector } from 'react-redux';
import { formattedDashedDate } from '../../Const/Methods';
import { removeBirthdayById } from '../../Redux/birthdaysListSlice';
import { setSelectedBirthday } from '../../Redux/selectedBirthdaySlice';
import './BirthdayListItem.scss';

export default function BirthdayListItem({ item }) {

    const birthdaysList = useSelector((state) => state.birthdays.value);
    const selectedBirthday = useSelector((state) => state.selectedBirthday.value);
    const dispatch = useDispatch();

    const handleDeleteItem = () => {
        dispatch(removeBirthdayById(item.id));
        dispatch(setSelectedBirthday(selectedBirthday === 0 ? selectedBirthday : selectedBirthday - 1));
    }

    const handleSelectItem = (e) => {
        if (e.target.className === "BirthdayListItem--DeleteBtn") {
            return;
        }
        const indexOfSelectedItem = birthdaysList.findIndex((bday) => bday.id === item.id);
        dispatch(setSelectedBirthday(indexOfSelectedItem));
    }

    return (
        <div onClick={handleSelectItem} className={item.id === birthdaysList[selectedBirthday].id ? "BirthdayListItem Active" : "BirthdayListItem"}>
            <div className="BirthdayListItem--MetadataContainer">
                <img className="BirthdayListItem--ProfilePic" src={item.img} alt="profile" />
                <div>
                    <p className="BirthdayListItem--ProfileName">{item.name}</p>
                    <p className="BirthdayListItem--ProfileSubtitle">{formattedDashedDate(item.dob)}</p>
                </div>
            </div>
            <button onClick={handleDeleteItem} type="button" className="BirthdayListItem--DeleteBtn">DELETE</button>
        </div>
    );
}
