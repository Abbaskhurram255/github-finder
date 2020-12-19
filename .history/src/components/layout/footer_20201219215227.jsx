import React from 'react';

export const Footer = () => {

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fa fa-info-circle" /> {alert.msg}
      </div>
    )
  );
};

export default Alert;
