import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import { createFooter, createHeader, createMain, createBasket } from './common';
import { navigation } from './navigation/navigation';
import './it-spa.scss';
import { basketBehavior, basketCounterGetter } from './common/basketBehavior';

const body = $(document.body);

let itSpaHeader = createHeader([
    'https://cdn.pixabay.com/photo/2016/02/19/10/51/stairs-1209439_1280.jpg',
    'https://images.unsplash.com/photo-1573088422077-b6ed78408ff4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=918&q=80',
    'https://cdn.pixabay.com/photo/2017/02/27/15/12/rice-2103481_1280.jpg'
]);

const itSpaNavigation = navigation();
const itSpaMain = createMain();
const itSpaBasket = createBasket();
const itSpaFooter = createFooter();

body.append(itSpaNavigation);
body.append(itSpaHeader);
body.append(itSpaMain);
body.append(itSpaBasket);
body.append(itSpaFooter);

basketBehavior();
basketCounterGetter();