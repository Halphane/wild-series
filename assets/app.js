/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';

// start the Stimulus application
import './bootstrap';

const $ = require('jquery');
require ('bootstrap');

$(document).ready(function() {
    $('[data-toggle="popover"]').popover();
});

import 'bootstrap-icons/font/bootstrap-icons.css'; 

document.querySelector("#watchlist").addEventListener('click', addToWatchList);

function addToWatchList(event) {
    event.preventDefault();
    let watchlistLink = event.currentTarget;
    let link = watchlistLink.href;

    fetch(link)
        .then(res => res.json())
        .then(function(res) {
            let watchlistIcon = watchlistLink.firstElementChild;
            if(res.isInWatchlist) {
                watchlistIcon.classList.remove('bi-star');
                watchlistIcon.classList.add('bi-star-fill');
            } else {
                watchlistIcon.classList.remove('bi-star-fill');
                watchlistIcon.classList.add('bi-star');
            }
        });
}