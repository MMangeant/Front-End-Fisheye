const photographersSection = document.querySelector('.photographer_section');
const photographersHeader = document.querySelector('.photograph-header');
const photographerMedias = document.querySelector('.photograph-medias');
const encartBas = document.querySelector('.encart-bas');
const nameContact = document.querySelector('#contact_name');

// Variables fonction de tri //
let previousChoice;
const ouvreTri = document.querySelector('.ouvreTri');
const selectTri = document.querySelector('#selectTris');
const fermeTri = document.querySelector('.fa-chevron-up');

// Variables lightbox //
const prevArrow = document.querySelector('.lightbox__prev');
const nextArrow = document.querySelector('.lightbox__next');
const crossLightbox = document.querySelector('.lightbox__close');
const titleLightbox = document.querySelector('.lightbox__title');
const allLightbox = document.querySelector('.lightbox');
const contLightbox = document.querySelector('.lightbox__container');
let mediaCurrent;
let idMediaCurrent;
let photoLightbox;
let videoLightbox;

// Variables incrémentation likes //
let sommeLikes = 0;

// Variables modale de contact //
const modal = document.getElementById('contact_modal');
const modalBtn = document.getElementById('send_button');
const modalContenu = document.querySelector('.modal');
const modalChamps = [...document.querySelectorAll('input, textarea')];
