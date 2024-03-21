import React from 'react';
import { motion } from 'framer-motion';

const withRotate = (WrappedComponent) => {
  // Return a new functional component
  return (props) => (
    <motion.div
      whileHover={{ scale: 1.2, rotate: 90 }}
      whileTap={{
        scale: 0.8,
        rotate: -90,
        borderRadius: "100%"
      }}
    >
      <WrappedComponent {...props} />
    </motion.div>
  );
};

export default withRotate;
