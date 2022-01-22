import React from 'react';
import styled from 'styled-components';
import device from '../util/device';

type PageContainerProps = React.PropsWithChildren<unknown>;

const Background = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.pageBackground};
  padding: 24px 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.mobileL} {
    padding: 64px 64px 0;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 900px;
  height: 100%;
  background-color: ${({ theme }) => theme.generatorBackground};
  padding: 32px;
  border-radius: 24px 24px 0px 0px;

  @media ${device.mobileL} {
    padding: 64px;
    border-radius: 64px 64px 0px 0px;
  }
`;

const PageContainer = ({ children }: PageContainerProps) => (
  <Background>
    <Container>{children}</Container>
  </Background>
);

export default PageContainer;
