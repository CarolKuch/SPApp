import $, { map } from 'jquery';
import axios from 'axios';
import { minLenght } from './minLength';
import { required } from './required';

export const registration = () => {
    const fragment = $(document.createDocumentFragment());
    const h2 = $(`<h2>Rejestracja</h2>`);
    const form = $(`
        <form name="signUp" novalidate autocomplete="off">
        <div class="form-group">    
            <label>Login: </label>
            <input id="login" type="text" />
            <p class="text-danger" id="login-required">Login jest wymagany</p>
        </div>
        <div class="form-group">
            <label>Hasło: </label>
            <input id="password" type="password"/>
            <p class="text-danger" id="password-required">Hasło jest wymagane!</p>
            <p class="text-danger" id="password-min-length">Hasło jest zbyt krótkie!</p>
        </div>
            <!--<p class="password-strength">
                <span class="weak"></span>
                <span class="medium"></span>
                <span class="strong"></span>
            </p>-->
            <button type="button">Zarejestruj się</button>

            
        </form>
    `);
    const errorMessages = {
        login: {
            required: form.find('#login-required')
        },
        password: {
            required: form.find('#password-required'),
            minLength: form.find('#password-min-length'),
        }
    };

    fragment.append(h2);
    fragment.append(form);
    errorMessages.login.required.hide();
    errorMessages.password.required.hide();
    errorMessages.password.minLength.hide();

    form.find('button').on('click', event => {
        event.preventDefault();
        const login = $('#login').val();
        const password = $('#password').val();
        const min8Chars = minLenght(8);

        const loginIsRequired = required(login);
        const passwordIsRequired = required(password);
        const passwordMinLength = min8Chars(password);
        console.log(loginIsRequired, passwordIsRequired, passwordMinLength);

        loginIsRequired ? errorMessages.login.required.show() : errorMessages.login.required.hide();
        passwordIsRequired ? errorMessages.password.required.show() : errorMessages.password.required.hide();
        passwordMinLength ? errorMessages.password.minLength.show() : errorMessages.password.minLength.hide();

        if(!required(login) && !required(password) && !min8Chars(password)){
            axios
                .post('http://localhost:3000/users',{ 
                    login: login, password: password
                })
                .then(response => console.log(response));

            console.log(login, password);
        }
    })

    return fragment;
}