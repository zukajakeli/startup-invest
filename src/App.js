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

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/startups" component={StartupPage} />
        <Route exact path="/blogs" component={BlogsPage} />
        <Route exact path="/about-us" component={AboutUsPage} />
        <Route exact path="/FAQ" component={FAQPage} />
        <Route exact path="/contact-us" component={ContactPage} />
        <Route exact path="/single-blog" component={SingleBlog} />
        <Route exact path="/single-startup" component={SingleStartup} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </>
  );
}

export default App;
