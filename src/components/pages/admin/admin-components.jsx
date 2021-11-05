import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const Sidebar = styled.aside`
  width: 20rem;
  height: 100%;
  background-color: #001529;
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const StyledNavLink = styled(NavLink)`
  width: 100%;
  height: 5rem;
  color: white;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  :hover {
    background-color: #2e3642;
  }

  &.active {
    background-color: #46546c;
  }
`;

export const Content = styled.div`
  background-color: #f8f8f8;
  flex: 1;
  overflow-y: auto;
  padding: 5rem;
`;
