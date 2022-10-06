import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../services/api';

axios.defaults.baseURL = 'https://62d96dde9eedb699635becc3.mockapi.io/';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    const contacts = await API.getContacts();
    return contacts;
  }
);
// export const addContact =
//   ({ name, phone }) =>
//   dispatch => {
//     const contact = { name, phone };
//     dispatch(addContactRequest());
//     axios
//       .post('/contacts', contact)
//       .then(({ data }) => dispatch(addContactSuccess(data)))
//       .catch(error => dispatch(addContactError(error)));
//   };

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }) => {
    const contact = await API.addContact({ name, phone });
    return contact;
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const contact = await API.deleteContact(id);
    console.log(contact);
    return contact;
  }
);
