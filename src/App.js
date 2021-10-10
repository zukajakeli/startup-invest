import { Switch, Route } from 'react-router-dom';
import { useLocation } from 'react-router';

import AboutUsPage from './components/pages/about-us-page/AboutUsPage';
import BlogsPage from './components/pages/blogs-page/BlogsPage';
import ContactPage from './components/pages/contact-page/ContactPage';
import FAQPage from './components/pages/FAQ-page/FAQPage';
import MainPage from './components/pages/main-page/MainPage';
import StartupPage from './components/pages/startUp-page/StartupPage';
import { useEffect } from 'react';

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
      </Switch>
    </>
  );
}

export default App;
