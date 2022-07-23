import axios from 'axios';

axios.defaults.baseURL = 'https://62d96dde9eedb699635becc3.mockapi.io/';

const addContact = async ({ name, phone }) => {
  const response = await axios.post('/contacts', { name, phone });
  console.log(response.data);
  return response.data;
};

const getContacts = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

const deleteContact = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};
const getContactById = async id => {
  const response = await axios.get(`/contacts/${id}`);
  return response.data;
};

export { addContact, getContacts, getContactById, deleteContact };
