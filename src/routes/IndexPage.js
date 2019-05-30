import React from 'react';
import { connect } from 'dva';

function IndexPage() {
  return (
    <h1>dva.js的变化</h1>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
