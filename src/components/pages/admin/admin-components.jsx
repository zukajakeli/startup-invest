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
  background-color: #3c4b64;
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledNavLink = styled(NavLink)`
  width: 100%;
  height: 5rem;
  color: white;
  font-size: 2.2rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  :hover {
    background-color: #46546c;
  }

  &.active {
    background-color: #46546c;
  }
`;

export const Content = styled.div`
  background-color: #ebedef;
  flex: 1;
  overflow-y: auto;
`;
