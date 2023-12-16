import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';
import style from './ContactList.module.css';

const ContactList = ({ visibleContacts, onDeleteContact }) => {
  return (
    <ul className={style.list}>
      {visibleContacts.length !== 0 ? (
        visibleContacts.map(({ id, name, number }) => {
          return (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDeleteContact={onDeleteContact}
            />
          );
        })
      ) : (
        <li className={style.error}>Not found name</li>
      )}
    </ul>
  );
};

ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;