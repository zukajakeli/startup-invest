import { useLocation } from 'react-router-dom';
import * as S from './admin-components';
import Blogs from './blogs/Blogs';
import Contacts from './contacts/Contacts';
import FAQs from './FAQs/FAQs';
import Startups from './startups/Startups';
import About from './about/About';
import Users from './users/Users';

const Admin = () => {
  const { pathname } = useLocation();

  return (
    <S.Wrapper>
      <S.Sidebar>
        <S.LinkWrapper>
          <S.StyledNavLink to="/admin/users">Users </S.StyledNavLink>
          <S.StyledNavLink to="/admin/blogs">Blogs </S.StyledNavLink>
          <S.StyledNavLink to="/admin/startups">Startups </S.StyledNavLink>
          <S.StyledNavLink to="/admin/contact">Contact </S.StyledNavLink>
          <S.StyledNavLink to="/admin/about">About </S.StyledNavLink>
          <S.StyledNavLink to="/admin/faq">FAQ </S.StyledNavLink>
        </S.LinkWrapper>
      </S.Sidebar>
      <S.Content>
        {pathname === '/admin/users' && <Users />}
        {pathname === '/admin/blogs' && <Blogs />}
        {pathname === '/admin/startups' && <Startups />}
        {pathname === '/admin/contact' && <Contacts />}
        {pathname === '/admin/about' && <About />}
        {pathname === '/admin/faq' && <FAQs />}
      </S.Content>
    </S.Wrapper>
  );
};

export default Admin;
