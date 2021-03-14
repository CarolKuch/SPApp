import $, { map } from 'jquery';
import axios from 'axios';
import { minLenght } from './minLength';
import { required } from './required';
import { passwordChecker } from './passwordChecker';

export const registration = () => {
    const fragment = $(document.createDocumentFragment());
    $('#header-carousel').hide(); 
    $('.top-nav').removeClass(['bg-transparent']);
    const form = $(`        
        <form name="signUp" novalidate autocomplete="off" class="text-center">
        <h2 class="text-center">Rejestracja</h2>
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
            <div class="password-strength-description">Siła hasła: </div>
                <p class="password-strength">                    
                    <div class="weak"></div>
                    <div class="medium"></div>
                    <div class="strong"></div>
                </p>
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
    fragment.append(form);
    errorMessages.login.required.hide();
    errorMessages.password.required.hide();
    errorMessages.password.minLength.hide();
    form.find('.weak').hide();
    form.find('.medium').hide();
    form.find('.strong').hide();

    form.find('#password').on('keyup', () => {
        let passwordStrength = passwordChecker($('#password').val());
    
        if (passwordStrength===1) {
            $('.weak').show();
            $('.medium').hide();
            $('.strong').hide();
        }else if (passwordStrength===2) {
            $('.weak').show();
            $('.medium').show();
            $('.strong').hide();
        }else if (passwordStrength===3) {
            $('.weak').show();
            $('.medium').show();
            $('.strong').show();
        }
    })

    form.find('button').on('click', event => {
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
                .post('http://localhost:3000/users',{ 
                    login: login, password: password
                });
        }
    })

    return fragment;
}