import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { deleteContact } from '../../redux/contactsSlise';

const ContactList = () => {
  const selectContacts = useSelector(state => state.contactsData.items);
  const selectNameFilter = useSelector(state => state.filter.name);
  const dispatch = useDispatch();

  const onDeleteProfile = profileId => {
    const action = deleteContact(profileId);
    dispatch(action);
  };

  const filteredUsers = selectContacts.filter(user =>
    user.name.toLowerCase().includes(selectNameFilter.toLowerCase().trim()),
  );

  return (
    <ul className={css.list}>
      {filteredUsers.map(profileItem => {
        return (
          <li key={profileItem.id} className={css.item}>
            <Contact
              id={profileItem.id}
              name={profileItem.name}
              number={profileItem.number}
              onDeleteProfile={onDeleteProfile}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
