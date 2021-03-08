import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const {alert} = alertContext;

  console.log(alert);
  return (
    alertContext.alert != null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle"></i> {alert.msg}
      </div>
    )
  );
};

export default Alert;
