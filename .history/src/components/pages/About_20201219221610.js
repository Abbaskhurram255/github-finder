import React, { Fragment } from 'react';

const styles = () => {
  color: lightGray;
}
const About = () => {
  return (
    <Fragment>
      <em>A free service that displays statistics for coders with public Git repositories on GitHub.</em><br /><p>Version 1.0</p><br />
      <small id='ab' {style="color:red"}>&copy;opyright by Alex Puth aka Khurram</small>
    </Fragment>
  );
};

export default About;
