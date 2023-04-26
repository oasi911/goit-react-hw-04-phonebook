import PropTypes from 'prop-types';
import { List } from './ContactElement.styled';
import { DeleteBtn } from './ContactElement.styled';

export const ContactElement = ({ name, number, onClickDeleteBtn, id }) => {
  return (
    <List>
      <p>
        {name}: {number}
      </p>
      <DeleteBtn onClick={() => onClickDeleteBtn(id)}>Delete</DeleteBtn>
    </List>
  );
};

ContactElement.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  onClickDeleteBtn: PropTypes.func,
};
