import React, { useContext } from 'react';

export const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fa fa-info-circle" /> {alert.msg}
      </div>
    )
  );
};

export default Alert;
