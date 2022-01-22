import React from 'react';
import styled from 'styled-components';
import device from '../util/device';

type PageHeadingProps = React.PropsWithChildren<{
  heading: string;
}>;

const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media ${device.mobileL} {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`;

const StyledHeading = styled.h1`
  color: ${({ theme }) => theme.text};
  margin-bottom: 0px;
  margin-top: 0px;
  font-size: 24px;
  margin-bottom: 8px;

  @media ${device.mobileL} {
    margin-bottom: 0px;
    font-size: 30px;
  }

  @media ${device.tablet} {
    font-size: 36px;
  }
`;

const PageHeading = ({ heading, children }: PageHeadingProps) => (
  <HeadingContainer>
    <StyledHeading>{heading}</StyledHeading>
    {children}
  </HeadingContainer>
);

export default PageHeading;
