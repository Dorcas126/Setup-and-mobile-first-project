const body = document.querySelector('body');
const navigation = document.querySelector('.icons');

navigation.addEventListener('click', () => {
  body.classList.toggle('open-menu');
});

const menuLink = document.querySelectorAll('.ul-link');

menuLink.forEach((e) => e.addEventListener('click', () => {
  body.classList.remove('open-menu');
}));

// -------------------------------POPUP WINDOW------------------------//

const works = [
  {
    id: 1,
    title: 'Tonic',
    image: 'img/Snapshoot Portfolio.png',
    imgeAlt: 'snapshoot Portfolio picture',
    canopy: ['CANOPY', 'Front-End Dev', '2022'],
    descript:
    'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'css', 'javascript'],
    sourcebtn: '#',
    liveBtn: '#',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    image: 'img/Snapshoot Portfolio(1).png',
    imageAlt: 'snapshoot Portfolio picture',
    canopy: ['FACEBOOK', 'Back End Dev', '2015'],
    descript:
    'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    languages: ['html', 'css', 'Javascript'],
    sourcebtn: '#',
    liveBtn: '#',
  },
  {
    id: 3,
    title: 'Facebook 360',
    image: 'img/Snapshoot Portfolio(2).png',
    imageAlt: 'snapshoot Portfolio picture',
    canopy: ['FACEBOOK', 'Full Stack Dev', '2015'],
    descript:
    'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    languages: ['html', 'css', 'Javascript'],
    sourcebtn: '#',
    liveBtn: '#',
  },
  {
    id: 4,
    title: 'Uber Navigation',
    image: 'img/Snapshoot Portfolio(3).png ',
    imageAlt: 'snapshoot Portfolio picture',
    canopy: ['Uber', 'Lead Developer', '2018'],
    descript:
    'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    languages: ['html', 'css', 'Javascript'],
    sourcebtn: '#',
    liveBtn: '#',
  },
];

for (let i = 0; i < works.length; i += 1) {
  const work = works[i];

  const portfolio = document.getElementById('portfolio');
  portfolio.innerHTML += `
  <div class="canopy-card-section">
  <div class="mycanopy-section">
      <div class="snapshoot-portofolio">
          <img src="${work.image}" alt="snapshoot Portfolio picture">
      </div>
      <div class="project-card">
          <h2>${work.title}</h2>
          <h3>${work.canopy[0]} &nbsp; <img src="img/Counter (1).png" alt="dot symbol">&nbsp;<span>${work.canopy[1]}
                  &nbsp; <img src="img/Counter (1).png" alt="dot symbol"> &nbsp;${work.canopy[2]} </span></h3>
          <p> ${work.descript}</p>
          <ul>
              <li class="html-tag">${work.languages[0]}</li>
              <li class="css-tag">${work.languages[1]}css</li>
              <li class="js-tag">${work.languages[2]}</li>
          </ul>
          <button type="button" id="see_project">See Project</button>
      </div>
  </div>
</div>
`;
}

const sampleStep = [
  {
    title: 'Tonic',
    image: 'img/Snapshoot Portfolio(2).png',
    imageAlt: 'snapshoot Portfolio picture',
    canopy: ['CANOPY', 'Back End Dev', '2015'],
    descript:
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
      when an unkown printer took a galley of type and scrambled it 1960s with thereleaLorem 
      Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with the 
    releorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the 
    releawn printer took a galley of type and scrambled it 1960s with the releaLorem 
    Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
    has been the industrys standard dummy text ever since the 1500s, when an unknown 
    printer took a galley of type and scrambled it 1960s with the relea`,
    languages: ['html', 'css', 'javascript'],
  },
];

const bodyElement = document.querySelector('body');

// const popbar = document.getElementById('myPopup');
const seeproject = document.querySelectorAll('#see_project');
seeproject.forEach((item) => {
  item.addEventListener('click', () => {
    const main = document.createElement('section');
    main.className = 'popup';

    main.innerHTML = `
    <div class="popup-container">
    <div>
    <div class="popup-title">
        <h2>${sampleStep[0].title}</h2>
        <i class="fas fa-times close-popup" data-dismiss-popup></i>
        </div>
        <div class="subtitle-container">
            <h4>${sampleStep[0].canopy[0]}</h4>
            <ul>
                <li>${sampleStep[0].canopy[1]}</li>
                <li>${sampleStep[0].canopy[2]}</li>
            </ul>
        </div>
        <img class="popupImage" src="${sampleStep[0].image}" alt="my first work">
    </div>
    <div class= "popupDescription">
        <p class="paragraphPopup">${sampleStep[0].descript}
        </p>
        <div class="language-container">
            <ul class="languageText">
                <li>${sampleStep[0].languages[0]}</li>
                <li>${sampleStep[0].languages[1]}</li>
                <li>${sampleStep[0].languages[2]}t</li>
            </ul>
            <div class="button_container">
                <a class="btn-live link" target="_blank" href="#">See live <img src="img/Icon 1.png"  alt="popup"/></a>
                <a class="btn-code link" target="_blank" href="#">See source <img src="img/Vector.png"  alt="github"/></a>
            </div>
        </div>
    </div>
</div>
    `;

    bodyElement.appendChild(main);
    const closeBtn = document.querySelector('.close-popup');
    closeBtn.addEventListener('click', () => {
      bodyElement.removeChild(main);
    });
  });
});

const popupsBtn = document.querySelectorAll('[data-popup-ref]');
const popupTitle = document.querySelector('.popup-h2');
const popImage = document.querySelector('.popup-title img');
const projectDetails = document.querySelector('.window-descript');
const language = document.querySelector('.windows-languages');
const livelink = document.querySelector('.btn-live');
const ghLink = document.querySelector('.btn-code');

popupsBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    const popupId = btn.getAttribute('data-popup-ref');
    const id = Number(btn.parentNode.parentNode.id.split('-')[1]);
    const popup = document.querySelector(`[data-popup-id='${popupId}']`);
    const {
      title, image, imageAlt, descript, languages, sourcebtn, liveBtn,
    } = works.find((work) => work.id === id);

    if (popup !== undefined && popup !== null) {
      const popupContent = popup.querySelector('.popup-content');
      const closeBtns = popup.querySelectorAll('[data-dismiss-popup]');

      closeBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          setTimeout(() => {
            popup.classList.remove('active');
          }, 250);
          popupContent.classList.remove('active');
        });
      });

      popupContent.addEventListener('click', (event) => {
        event.stopPropagation();
      });

      popup.classList.add('active');
      setTimeout(() => {
        popupTitle.innerText = title;
        popImage.setAttribute('src', image);
        popImage.setAttribute('alt', imageAlt);
        projectDetails.innerText = descript;
        language.innerHTML = languages
          .map((lang) => `<li>${lang}</li>`)
          .join('');
        livelink.setAttribute('href', liveBtn);
        ghLink.setAttribute('href', sourcebtn);

        popupContent.classList.add('active');
      }, 1);
    }
  });
});
const userInput = JSON.parse(localStorage.getItem('userInput')) || {
  FullName: '',
  mail: '',
  textArea: '',
}
function saveInputsToLocalStorage(inputsElements, key) {
  inputsElements.addEventListener('input', () => {
  userInput[key] = inputsElements.value.trim();
  localStorage.setItem('userInput', JSON.stringify(userInput))  
  })
}

const FullName = document.getElementById('fullName');
const form = document.getElementById('formMain');
const mail = document.getElementById('email');
const textArea = document.getElementById('message');
const message = document.getElementById('span');
console.log(textArea)

form.addEventListener('submit', (even) => {
  const chackEmail = mail.value.toLowerCase();
  if (mail.value !== chackEmail || mail.value === '') {
    even.preventDefault();
    message.innerHTML = 'Invalid form. Your email have to be in lowercase';
  } else {
    form.submit();
  }
});
mail.value = userInput.mail
FullName.value = userInput.FullName
textArea.value = userInput.textArea
saveInputsToLocalStorage(FullName, 'FullName')
saveInputsToLocalStorage(mail, 'mail')
saveInputsToLocalStorage(textArea, 'textArea')



