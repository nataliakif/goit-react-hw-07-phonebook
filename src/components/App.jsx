import Section from './Section/Section';
import InputForm from './InputForm/InputForm';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

function App() {
  return (
    <>
      <Section title="PhoneBook">
        <InputForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <Contacts />
      </Section>
    </>
  );
}

export default App;
