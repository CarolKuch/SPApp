import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import { createFooter, createHeader, createMain } from './common';
import './it-spa.scss';

const body = $(document.body);

const itSpaHeader = createHeader();
const itSpaMain = createMain();
const itSpaFooter = createFooter();

body.append(itSpaHeader);
body.append(itSpaMain);
body.append(itSpaFooter);
