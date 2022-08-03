const nameTag = document.querySelector('.brand-name>p');
const socialIcons = document.querySelector('.social-icons');
const showBioBtn = document.querySelector('#show-bio');
const showHomeBtn = document.querySelector('#show-home');
const bioSection = document.querySelector('#biography');
const homeSection = document.querySelector('#home');
const quoteWrapper = document.querySelector('.quote-wrapper');
const titleSpan = document.querySelector('#title');

const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));

const titles = ['Consultant', 'Author', 'University Instructor'];
let onBio = false;

const quote = document.createElement('blockquote');
quote.textContent = `Do it from your heart. Speak it from your soul. That's life purpose after all!`;


setTimeout(() => {
    nameTag.classList.add('enter');
    socialIcons.classList.add('enter');
}, 500);

async function shuffleTitle() {
    for (const title of titles) {
        await wait(2000);
        titleSpan.textContent = title;
    }
    console.log('running!');
    onBio && shuffleTitle();
}

function showBio() {
    bioSection.classList.add('active');
    homeSection.classList.add('hide');
    onBio = true;
    shuffleTitle();
}

function showHome() {
    bioSection.classList.remove('active');
    homeSection.classList.remove('hide');
    onBio = false;
}

async function showQuote() {
    this.classList.add('expand');
    await wait(1500);
    this.appendChild(quote);
}

showBioBtn.addEventListener('click', showBio);
showHomeBtn.addEventListener('click', showHome);
quoteWrapper.addEventListener('mouseenter', showQuote, { once: true });
