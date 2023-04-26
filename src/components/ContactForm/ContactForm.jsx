import PropTypes from 'prop-types';
import { StyledForm } from './ContactForm.styler';
import { AddBtn } from './ContactForm.styler';
import { StyledLabel } from './ContactForm.styler';
import { StyledInput } from './ContactForm.styler';
import { Paragraph } from './ContactForm.styler';

export const ContactForm = ({ onSubmit }) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledLabel>
        <Paragraph>Name</Paragraph>
        <StyledInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </StyledLabel>
      <StyledLabel>
        <Paragraph>Number</Paragraph>
        <StyledInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </StyledLabel>
      <AddBtn>Add Contact</AddBtn>
    </StyledForm>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
