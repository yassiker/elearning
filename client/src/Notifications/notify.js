import { toastr } from 'react-redux-toastr';

const notify = (notificationType, title, message, options) => {
  if (notificationType === 'error')
    options = {
      timeOut: 5000,
      ...options,
    };

  return toastr[notificationType](title, typeof message === 'string' ? message : '', options);
};

export const notifySuccessChanges = () => {
  return notify('success', 'Perfect!', 'The changes have been saved');
};

export const notifyErrorMessage = (errorMessage) => {
  return notify('error', 'Email address or password is incorrect', errorMessage);
};

export default notify;
