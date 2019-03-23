import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

let tabId = 0;

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map(tab => <Tab key={tabId++} tab={tab} selectedTab={props.selectedTab} selectTabHandler={props.selectTabHandler} />)}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func
}

export default Tabs;
