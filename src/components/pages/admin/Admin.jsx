import { useLocation } from 'react-router-dom';
import * as S from './admin-components';
import Blogs from './blogs/Blogs';
import Contacts from './contacts/Contacts';
import FAQs from './FAQs/FAQs';
import Startups from './startups/Startups';
import About from './about/About';
import Users from './users/Users';
import AddNewBlog from './blogs/AddNewBlog';
import AddNewStartup from './startups/AddNewStratup';
import EditAboutInfo from './about/EditAboutInfo';
import Social from './social/Social';
import logo from '../../../assets/icons/main-logo.svg';
const Admin = () => {
  const { pathname } = useLocation();

  return (
    <S.Wrapper>
      <S.Sidebar>
        <S.LinkWrapper>
          <img
            src={logo}
            alt="logo"
            style={{ background: 'white', width: '100%', padding: '1rem' }}
          />
          <S.StyledNavLink to="/admin/users">Users </S.StyledNavLink>
          <S.StyledNavLink to="/admin/blogs">Blogs </S.StyledNavLink>
          <S.StyledNavLink to="/admin/add-new-blog">
            + Add New Blog{' '}
          </S.StyledNavLink>
          <S.StyledNavLink to="/admin/startups">Startups </S.StyledNavLink>
          <S.StyledNavLink to="/admin/add-new-startup">
            + Add New Startup{' '}
          </S.StyledNavLink>
          <S.StyledNavLink to="/admin/contact">Contact </S.StyledNavLink>
          <S.StyledNavLink to="/admin/about">About </S.StyledNavLink>
          <S.StyledNavLink to="/admin/faq">FAQ </S.StyledNavLink>
          <S.StyledNavLink to="/admin/social">Social Network </S.StyledNavLink>
        </S.LinkWrapper>
      </S.Sidebar>

      <S.Content>
        {pathname === '/admin/users' && <Users />}
        {pathname === '/admin/blogs' && <Blogs />}
        {pathname === '/admin/add-new-blog' && <AddNewBlog />}
        {pathname === '/admin/add-new-startup' && <AddNewStartup />}
        {pathname === '/admin/startups' && <Startups />}
        {pathname === '/admin/contact' && <Contacts />}
        {pathname === '/admin/about' && <EditAboutInfo />}
        {pathname === '/admin/faq' && <FAQs />}
        {pathname === '/admin/social' && <Social />}
      </S.Content>
    </S.Wrapper>
  );
};

export default Admin;
