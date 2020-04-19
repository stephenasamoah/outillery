import React from 'react';
import './login.styles.scss';
import FormInputComponent from '../../form/form-input/form-input.component';
import CustomButtonComponent from '../../form/custom-button/custom-botton.component';
import { signInWithGoogle } from '../../../firebase/firebase-utils';

class LoginComponent extends React.Component<{}, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    submitHandler = (evt: any) => {
        evt.preventDefault();
        console.log(this.state);
    };

    changeHandler = ({ target }: any) => {
        const { name, value } = target;
        return this.setState({ [name]: value });
    };

    render(): React.ReactNode {
        const { email, password } = this.state;

        return (
            <div className="login">
                <h2 className="title">Already have an account?</h2>
                <span>Sign in with email and password</span>
                <form onSubmit={ this.submitHandler }>
                    <fieldset>
                        <FormInputComponent type="email" label={ 'Email' } value={ email } name="email" id="email"
                                            handleChange={ this.changeHandler } required/>

                        <FormInputComponent type="password" label={ 'Password' } value={ password } name="password"
                                            id="password"
                                            handleChange={ this.changeHandler } required/>

                        <div className="buttons">
                            <CustomButtonComponent type="submit">Log in</CustomButtonComponent>
                            <CustomButtonComponent type="button" onClick={ signInWithGoogle } isGoogle>Sign in with
                                Google</CustomButtonComponent>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default LoginComponent;
