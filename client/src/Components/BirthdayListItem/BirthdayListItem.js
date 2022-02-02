import { useDispatch, useSelector } from 'react-redux';
import { updateBirthdaysList } from '../../Redux/birthdaysListSlice';
import './BirthdayListItem.scss';

export default function BirthdayListItem({ id, src, name, subtitle }) {

    const birthdaysList = useSelector((state) => state.birthdays.value);
    const dispatch = useDispatch();

    const handleDeleteItem = () => {
        const newBirthdaysList = birthdaysList.filter((item) => item.id !== id);
        dispatch(updateBirthdaysList(newBirthdaysList));
    }

    return (
        <div className="BirthdayListItem">
            <div className="BirthdayListItem--MetadataContainer">
                <img className="BirthdayListItem--ProfilePic" src={src} alt="profile" />
                <div>
                    <p className="BirthdayListItem--ProfileName">{name}</p>
                    <p className="BirthdayListItem--ProfileSubtitle">{subtitle}</p>
                </div>
            </div>

            <button onClick={handleDeleteItem} type="button" className="BirthdayListItem--DeleteBtn">DELETE</button>
        </div>
    );
}
