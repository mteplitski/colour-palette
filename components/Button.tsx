import styled from 'styled-components';
import device from '../util/device';

const StyledButton = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.accents[0]};
  padding: 12px 20px;
  border-radius: 10px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  border: none;
  margin-bottom 8px;

  @media ${device.mobileL} {
    margin-left: 16px;
    margin-bottom: 0px;
    font-size: 18px;
    font-weight: bold;
  }
`;

const Button = StyledButton;

export default Button;
