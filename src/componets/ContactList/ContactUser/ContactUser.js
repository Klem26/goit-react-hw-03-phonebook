import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactUser.module.css";

const ContactUser = ({ id, name, number, onDeleteContacts }) => {
  return (
    <li className={styles.contactItem}>
      <span className={styles.name}>{name}</span>
      <span className={styles.phone}>{number}</span>
      <button
        className={styles.btnDelete}
        type="button"
        onClick={() => onDeleteContacts(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactUser;

ContactUser.propTypes = {
  onDeleteContacts: PropTypes.func.isRequired,
};
