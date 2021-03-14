import $, { map } from 'jquery';
import axios from 'axios';
import { minLenght } from '../registration/minLength';
import { required } from '../registration/required';
import { goHome } from '../home/home';

export const login = () => {
    const fragment = $(document.createDocumentFragment());
    $('#header-carousel').hide(); 
    const form = $(`
        <form name="logIn" novalidate autocomplete="off" class="text-center">
            <h2 class="text-center">Logowanie</h2>
            <div class="form-group">    
                <label>Login: </label>
                <input id="login" type="text" />
                <p class="text-danger" id="login-required">Login jest wymagany</p>
            </div>
            <div class="form-group">
                <label>Hasło: </label>
                <input id="password" type="password"/>
                <p class="text-danger" id="password-required">Hasło jest wymagane!</p>
                <p class="text-danger" id="password-min-length">Hasło jest niepoprawne!</p>
            </div>
                <button type="button" id="login-button">Zaloguj się</button>            
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

    fragment.append(form);
    errorMessages.login.required.hide();
    errorMessages.password.required.hide();
    errorMessages.password.minLength.hide();

    form.find('#login').on('click', () =>{
        console.log("zalogowano");  
    })

    form.find('#login-button').on('click', event => {
        event.preventDefault();
        const login = $('#login').val();
        const password = $('#password').val();
        const min8Chars = minLenght(8);

        const loginIsRequired = required(login);
        const passwordIsRequired = required(password);
        const passwordMinLength = min8Chars(password);

        loginIsRequired ? errorMessages.login.required.show() : errorMessages.login.required.hide();
        passwordIsRequired ? errorMessages.password.required.show() : errorMessages.password.required.hide();
        passwordMinLength ? errorMessages.password.minLength.show() : errorMessages.password.minLength.hide();

        if(!required(login) && !required(password) && !min8Chars(password)){

            axios
                .get('http://localhost:3000/users')
                .catch(error => {
                    console.log("error", error);
                })
        }
    })

    return fragment;

}