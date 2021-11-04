import { sendGoogleToken } from 'config/API';
import GoogleLogin from 'react-google-login';
import { useContext } from 'react';
import { MeContext } from 'contexts/MeContext';
import { AuthDropdownContext } from 'contexts/AuthDropdownContext';
import googleIcon from 'assets/icons/google-icon.svg';

import * as S from '../authorization-components';

const GoogleLoginButton = () => {
  const [isAuthDropdownOpen, setIsAuthDropdownOpen] =
    useContext(AuthDropdownContext);
  const [meInfo, setMeInfo] = useContext(MeContext);
  const responseGoogleSuccess = (response) => {
    sendGoogleToken({ tokenId: response.tokenId }).then((res) => {
      console.log(res);
      setMeInfo(res.data);
      localStorage.setItem('token', res.data.token);
      setIsAuthDropdownOpen(false);
    });
  };
  const responseGoogleFail = (response) => {
    console.log('errorResponse', response);
  };

  return (
    <>
      <GoogleLogin
        clientId="637911518446-fuqolk9hrisqtl90qbkn21ftnaf06508.apps.googleusercontent.com"
        render={(renderProps) => (
          <S.SocialButton onClick={renderProps.onClick} type="button" google>
            <S.SocialIcon src={googleIcon} alt="fb" /> Google-ით
          </S.SocialButton>
        )}
        buttonText="Login"
        onSuccess={responseGoogleSuccess}
        onFailure={responseGoogleFail}
        cookiePolicy={'single_host_origin'}
      />
    </>
  );
};

export default GoogleLoginButton;
