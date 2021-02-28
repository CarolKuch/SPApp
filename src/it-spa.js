import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import { createFooter, createHeader, createMain } from './common';
import { navigation } from './navigation/navigation';
import './it-spa.scss';

const body = $(document.body);

const itSpaHeader = createHeader();
const itSpaNavigation = navigation();
const itSpaMain = createMain();
const itSpaFooter = createFooter();

body.append(itSpaNavigation);
body.append(itSpaHeader);
body.append(itSpaMain);
body.append(itSpaFooter);
