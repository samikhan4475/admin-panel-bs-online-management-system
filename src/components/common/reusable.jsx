import React from 'react';
import Form from 'react-bootstrap/Form';
import { useFormikContext } from 'formik';

const TextField = ({ label, placeholder, type, name }) => {
    
  const { getFieldProps, touched, errors } = useFormikContext();
  const error = touched[name] && errors[name];

  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        {...getFieldProps(name)}
        placeholder={placeholder}
        isInvalid={!!error}
      />
      <Form.Control.Feedback type="invalid">
        {error}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export { TextField };
