import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import ListItemText from '@material-ui/core/ListItemText';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        // PROCESS FORM //
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };


    render() {
        const { values: { firstName, lastName, email, date, zipo, zipd} } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Data" />
                    <List >
                        <ListItem
                          primaryText="First Name"
                          secondaryText={firstName}
                        > <ListItemText primary={firstName} />
                        </ListItem>
                        <ListItem
                          primaryText="Last Name"
                          secondaryText={lastName}
                        />
                        <ListItem
                          primaryText="Email"
                          secondaryText={email}
                        />
                        <ListItem
                          primaryText="Moving Date"
                          secondaryText={date}
                        />
                        <ListItem
                          primaryText="Zip Origin"
                          secondaryText={zipo}
                        />
                        <ListItem
                          primaryText="Zip Destination"
                          secondaryText={zipd}
                        />
                    </List>
                    <br />
                    <RaisedButton
                        label="Confirm & Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails
