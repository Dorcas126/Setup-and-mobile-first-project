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
    title: 'To do List',
    image: 'img/todo.png',
    imgeAlt: 'To do list image',
    canopy: ['CANOPY', 'Front-End Dev', '2023'],
    descript:
    'In this project, I added some functionality to your application to make it interactive. The user will also be able to mark task completion by selecting the corresponding checkbox (or undo it by unchecking the checkbox). The updated tasks list will be stored in local storage.',
    languages: ['html', 'css', 'javascript', 'webpack'],
    sourcebtn: '<a href="https://github.com/Dorcas126/To-Do-List">See source</a>',
    liveBtn: '<a href="https://dorcas126.github.io/To-Do-List/dist/">See live</a>',
  },
  {
    id: 2,
    title: 'Awesome Books',
    image: 'img/awesome.png',
    imageAlt: 'snapshoot Portfolio picture',
    canopy: ['FACEBOOK', 'Back End Dev', '2023'],
    descript:
      'In this Awesome books Es6 Create a new directory and initialize it with git. Use npm init -y command to create package.json file. Create the entry point for your JavaScript code called index.js Create index.css file for your styles. Create the main index.html file. Link your index.js and index.css files there. Create a directory called modules.',
    languages: ['html', 'css', 'Javascript'],
    sourcebtn: '<a href="https://github.com/Dorcas126/Awesome-book-project">See source</a>',
    liveBtn: '<a href="https://dorcas126.github.io/Awesome-book-project/">See live</a>',
  },
  {
    id: 3,
    title: 'Space travelers',
    image: 'img/traveller.png',
    imageAlt: 'snapshoot Portfolio picture',
    canopy: ['FACEBOOK', 'Full Stack Dev', '2023'],
    descript:
    'In this project, we will be working with real live data from the SpaceX API to build a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
    languages: ['html', 'css', 'Javascript'],
    sourcebtn: '<a href="https://github.com/Dorcas126/space-travelers">See source</a>',
    liveBtn: '<a href="https://dorcaskikospacetravelers.netlify.app/">See live</a>',
  },
  {
    id: 4,
    title: 'Movie App',
    image: 'img/movie.png',
    imageAlt: 'snapshoot Portfolio picture',
    canopy: ['Uber', 'Lead Developer', '2023'],
    descript:
    'Built using JavaScript, HTML, and CSS, with webpack as the build tool. It makes use of the TvmazeAPI to retrieve information about each movies, and also utilizes a custom API to store and retrieve comments.',
    languages: ['html', 'css', 'Javascript'],
    sourcebtn: '<a href="https://github.com/Dorcas126/JavaScript-capstone-project">See source</a>',
    liveBtn: '<a href="https://dorcas126.github.io/JavaScript-capstone-project/dist/">See live</a>',
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
              <li class="css-tag">${work.languages[1]}</li>
              <li class="js-tag">${work.languages[2]}</li>
          </ul>
          <button type="button" id="see_project">${work.liveBtn}</button>
          <button type="button" id="see_project">${work.sourcebtn}</button>
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


            <div id="divider-1"></div>

            <div class="button_container">
                <a class="btn-live link" target="_blank" href="">See live <img src="img/Icon 1.png"  alt="popup"/></a>
                <a class="btn-code link" target="_blank" href="">See source <img src="img/Vector.png"  alt="github"/></a>
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
};
function saveInputsToLocalStorage(inputsElements, key) {
  inputsElements.addEventListener('input', () => {
    userInput[key] = inputsElements.value.trim();
    localStorage.setItem('userInput', JSON.stringify(userInput));
  });
}

const FullName = document.getElementById('fullName');
const form = document.getElementById('formMain');
const mail = document.getElementById('email');
const textArea = document.getElementById('message');
const message = document.getElementById('span');
// console.log(textArea);

form.addEventListener('submit', (even) => {
  const chackEmail = mail.value.toLowerCase();
  if (mail.value !== chackEmail || mail.value === '') {
    even.preventDefault();
    message.innerHTML = 'Invalid form. Your email have to be in lowercase';
  } else {
    form.submit();
  }
});
mail.value = userInput.mail;
FullName.value = userInput.FullName;
textArea.value = userInput.textArea;
saveInputsToLocalStorage(FullName, 'FullName');
saveInputsToLocalStorage(mail, 'mail');
saveInputsToLocalStorage(textArea, 'textArea');
