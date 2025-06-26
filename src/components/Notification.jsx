// components/Notification.jsx
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const Notification = ({ message }) => {
  useEffect(() => {
    if (message) {
      toast.info(message);
    }
  }, [message]);

  return null; 
};

export default Notification;
