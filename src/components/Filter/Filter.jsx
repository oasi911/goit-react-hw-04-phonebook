import PropTypes from 'prop-types';
import { Label } from './Filter.styled';

export const Filter = ({ value, onFilterElements }) => {
  return (
    <Label>
      Find contacts by name
      <input type="text" value={value} onChange={onFilterElements} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onFilterElements: PropTypes.func.isRequired,
};
