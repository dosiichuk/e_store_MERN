import React from 'react';
import { Spinner } from 'react-bootstrap';

const Component = ({ propName }) => {
  return <Spinner animation='border' variant='success' />;
};

export { Component as Spinner, Component as SpinnerComponent };
