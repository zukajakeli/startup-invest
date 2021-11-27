import { Switch, Route } from 'react-router-dom';
import { useLocation } from 'react-router';

import AboutUsPage from './components/pages/about-us-page/AboutUsPage';
import BlogsPage from './components/pages/blogs-page/BlogsPage';
import ContactPage from './components/pages/contact-page/ContactPage';
import FAQPage from './components/pages/FAQ-page/FAQPage';
import MainPage from './components/pages/main-page/MainPage';
import StartupPage from './components/pages/startUp-page/StartupPage';
import { useEffect } from 'react';
import SingleStartup from 'components/single-startup/SingleStartup';
import SingleBlog from 'components/single-blog/SingleBlog';
import Admin from './components/pages/admin/Admin';
import { useContext } from 'react';
import { MeContext } from 'contexts/MeContext';
import Temporary from 'temporary';
import { whoAmI } from 'config/API';
import MobileAuth from 'components/pages/mobile-auth/MobileAuth';
import ResetPasswordPage from 'components/components/reset-pass-page/ResetPasswordPage';
import { Helmet } from 'react-helmet';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const [meInfo, setMeInfo] = useContext(MeContext);
  useEffect(() => {
    const token = { token: localStorage.getItem('token') };
    token &&
      whoAmI(token).then((res) => {
        console.log('whoAmI', res);
        setMeInfo(res.data.user);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>StartupInvest </title>
        <meta property="og:title" content="test titlke" />
        <meta property="og:description" content="desc desc desc desc" />
        <meta property="og:image" content="iamgee" />
        <meta property="og:url" content="urlllllllll" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/startups" component={StartupPage} />
        <Route exact path="/blogs" component={BlogsPage} />
        <Route exact path="/about-us" component={AboutUsPage} />
        <Route exact path="/FAQ" component={FAQPage} />
        <Route exact path="/contact-us" component={ContactPage} />
        <Route path="/blog/:id" component={SingleBlog} />
        <Route path="/single-startup/:id" component={SingleStartup} />
        <Route path="/auth/:authType" component={MobileAuth} />
        <Route path="/reset-password/:id" component={ResetPasswordPage} />

        <Route path="/admin" component={Admin} />
      </Switch>
    </>
  );
}

export default App;
