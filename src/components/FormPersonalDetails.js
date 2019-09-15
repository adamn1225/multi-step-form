import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };


    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Your Details" />
                    <TextField
                        hintText="Where Are You Leaving From"
                        floatingLabelText="Zip Code"
                        onChange={handleChange('zipo')}
                        defaultValue={values.zipo}
                    />
                    <br/>
                    <TextField
                        hintText="Where Are You Leaving To"
                        floatingLabelText="Zip Code"
                        onChange={handleChange('zipd')}
                        defaultValue={values.zipd}
                    />
                    <br/>
                     <TextField
                        hintText="The Date You Need This Service"
                        floatingLabelText="DD/MM/YYYY"
                        onChange={handleChange('moveDate')}
                        defaultValue={values.MoveDate}
                    />
                    <br />
                    <RaisedButton
                        label="Continue"
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

export default FormPersonalDetails
