import FacebookLogin from 'react-facebook-login';
import { useContext } from 'react';
import { MeContext } from 'contexts/MeContext';
import { AuthDropdownContext } from 'contexts/AuthDropdownContext';

import { loginFacebook } from 'config/API';

import { ReactComponent as FBicon } from 'assets/icons/fb-icon.svg';
import './fb.css';

const FBLoginButton = () => {
  const [isAuthDropdownOpen, setIsAuthDropdownOpen] =
    useContext(AuthDropdownContext);
  const [meInfo, setMeInfo] = useContext(MeContext);
  const responseFacebook = (res) => {
    console.log(res);
    loginFacebook({ accessToken: res.accessToken, userID: res.userID }).then(
      (res) => {
        console.log('response from back about facebook', res);
        setMeInfo(res.data.user);
        localStorage.setItem('token', res.data.token);
        setIsAuthDropdownOpen(false);
      },
    );
  };

  return (
    <>
      <FacebookLogin
        appId="415637626830902"
        callback={responseFacebook}
        cssClass="my-facebook-button-class"
        icon={<FBicon />}
        textButton="Facebook-ით"
      />
    </>
  );
};

export default FBLoginButton;
