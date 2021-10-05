import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AboutUsPage from "./components/pages/about-us-page/AboutUsPage";
import BlogsPage from "./components/pages/blogs-page/BlogsPage";
import ContactPage from "./components/pages/contact-page/ContactPage";
import FAQPage from "./components/pages/FAQ-page/FAQPage";
import MainPage from "./components/pages/main-page/MainPage";
import StartupPage from "./components/pages/startUp-page/StartupPage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/startups" component={StartupPage} />
          <Route exact path="/blogs" component={BlogsPage} />
          <Route exact path="/about-us" component={AboutUsPage} />
          <Route exact path="/FAQ" component={FAQPage} />
          <Route exact path="/contact-us" component={ContactPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
