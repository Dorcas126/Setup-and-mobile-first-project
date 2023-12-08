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
