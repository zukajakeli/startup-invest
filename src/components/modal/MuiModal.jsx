import * as React from 'react';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 400,
  bgcolor: 'background.paper',
  p: 2,
  px: 4,
  pb: 3,
};

const MuiModal = ({ body, isAuthDropdownOpen, setIsAuthDropdownOpen }) => {
  const handleClose = () => setIsAuthDropdownOpen(false);
  return (
    <div>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={isAuthDropdownOpen}
        onClose={handleClose}
        BackdropComponent={Backdrop}
        onBackdropClick={handleClose}
      >
        {body}
      </StyledModal>
    </div>
  );
};

export default MuiModal;
