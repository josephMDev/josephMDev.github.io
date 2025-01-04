import { useState } from 'react';

interface Alert {
  show: boolean;
  text: string;
  type: 'danger' | 'success' | 'info'; // Define the possible alert types
}

interface ShowAlertArgs {
  text: string;
  type?: 'danger' | 'success' | 'info'; // Optional type with default value
}

const useAlert = () => {
  const [alert, setAlert] = useState<Alert>({ show: false, text: '', type: 'danger' });

  const showAlert = ({ text, type = 'danger' }: ShowAlertArgs) => setAlert({ show: true, text, type });
  const hideAlert = () => setAlert({ show: false, text: '', type: 'danger' });

  return { alert, showAlert, hideAlert };
};

export default useAlert;