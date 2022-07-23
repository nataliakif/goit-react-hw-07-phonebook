import PropTypes from 'prop-types';
import React from 'react';
import styles from './Contacts.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getContacts } from 'redux/operations';
import { useEffect } from 'react';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const filteredContacts = (contacts, filter) => {
    const lowerCase = filter.toLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(lowerCase);
    });
  };
  const contacts = useSelector(state =>
    filteredContacts(state.contacts.items, state.contacts.filter)
  );
  return (
    <>
      {contacts.length > 0 && (
        <ul className={styles['Contacts__list']}>
          {contacts.map(({ name, phone, id }) => (
            <li className={styles['Contacts__item']} key={id}>
              <p className={styles['Contacts__name']}>{name}</p>
              <p className={styles['Contacts__number']}>{phone}</p>
              <button
                className={styles['Contacts__button']}
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

Contacts.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func,
};

export default Contacts;
