import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Component = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export { Component as ScrollToTop, Component as ScrollToTopComponent };
