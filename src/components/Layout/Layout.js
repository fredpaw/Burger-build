import React, { Component } from 'react';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }
  sideDrawClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

  sidedrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    });
  }

  render() {
    return (
      <React.Fragment>
        <Toolbar drawerToggleClicked={this.sidedrawerToggleHandler} />
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawClosedHandler} />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </React.Fragment>
    );
  }
}

export default Layout;