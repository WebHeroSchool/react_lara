import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Todos from '../Todos/Todos';
import Badge from '@material-ui/core/Badge';
import Item from '../Item/Item';


const TabContainer = ({ children, dir }) => (
  <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
    {children}
  </Typography>
);


TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
});

class itemListCl extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="ALL" />
            <Tab label="DONE" />
            <Tab label={
              <Badge className={styles.Badge} style={{ padding: 6 }} color="secondary" badgeContent={1}> TODOs
              </Badge> 
            }
            />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}> <Todos items={this.props.items} onClickDone={this.props.onClickDone} onClickDelete={this.props.onClickDelete}/></TabContainer>
          <TabContainer dir={theme.direction}> <Todos items={this.props.items} onClickDone={this.props.onClickDone} onClickDelete={this.props.onClickDelete}/></TabContainer>
          <TabContainer dir={theme.direction}> <Todos items={this.props.items} onClickDone={this.props.onClickDone} onClickDelete={this.props.onClickDelete}/></TabContainer>

        </SwipeableViews>
      </div>
    );
  }
}



itemListCl.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};


export default withStyles(styles, { withTheme: true })(itemListCl);