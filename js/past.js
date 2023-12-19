// jQuery(function ($) {
//   $("#phone").mask("(999) 999-9999");
// });

// НАДО ЧТО ТО ПРИДУМАТЬ МОЖЕТ СДЕЛАТЬ ДОБАВЛЕНИЕ active ПРИ СКРОЛЕ ДО ТЕКСТА ИЛИ ЕЩЕ ЧТО 


// const text = ('постоянные');
// function typeText() {
//   let line = 0;
//   let count = 0;
//   let out = '';
//   let event = document.querySelector('.event__text');

//   function typeLine() {
//     // setTimeout это метод который позволят  выполнение указанную фунцкию через какой то указанный промежуток времени 
//     let interval = setTimeout(function () {
//       out += text[line][count];
//       event.innerHTML = out + '|';
//       count++;
//       // проверка
//       // не закончилась ли строка
//       if(count >= text[line].length) {
//         count = 0;
//         line++;
//         if (line == text.length) {
//           clearTimeout(interval);//остановил счетчик
//           event.innerHTML = out //после того как все отрисовалось нужно отрисовать еще раз но без | что бы она исчезла после написания
//           return true;
//         }
//       }
//       typeLine();
//     }, 400)
//   }
//   typeLine();
// }
// typeText();



// указать (строку)
// указать начало строки
// указать длину строки которая будет увеличиваться
// указать саму строку в которую будет добавлятся текст
// вызвать объект

// сделать функцию что бы она вызывалась с определенным интервалом для написания каждой буквы поочередно 1 функция 1 буква
// к пустрой строке добавить строку с текстом к которой добалнено начало и длина строки
// добавить эту конструкцию в html что бы он выводился
// увеличивать длину строки на +1

// СДЕЛАТЬ ПРОВЕРКИ = {

// если длина строки больше или равна строке , то длину нужно обнулить 
// сделать увеличение начала строки на +1

// ЕЩЕ ПРОВЕРКА 

// если начало строки === строке(пересчитать с помощью lenght) то остановить интервал срабатывания функции и остановить саму функцию (clearTimeout(interval))


// }



const objektHtml = document.querySelector('.event__text');
const text = 'постоянные';

let i = 0;
function runLine() {
  if (i++ < text.length) {
    objektHtml.innerHTML = text.substring(0, i) + '|'
  }
  else {
    objektHtml.innerHTML = "";
    i = 0;
  }
  dossne = setTimeout('runLine()', 250)
}
runLine();



// ПЕРВЫЙ СПОСОБ СДЕЛАТЬ ТАК ЧТО БЫ ПРИ НАЖАТИИ НА КНОПКУ ВЫПОЛНЯЛАСЬ ФУНКЦИЯ ,ПРИ ПОВТОРНОМ НАЖАТИИ ВТОРАЯ ФУНКЦИЯ ,ПРИ ТРЕТЬЕМ НАЖАТИИ СНОВА ПЕРВАЯ И ТАК ПО КРУГУ  

// let burger = document.querySelector('.header__top-burger');
// burger.addEventListener('click', () => {                                  
// burger.classList.toggle('active')
// });

// ВТОРОЙ СПОСОБ СДЕЛАТЬ ТАК ЧТО БЫ ПРИ НАЖАТИИ НА КНОПКУ ВЫПОЛНЯЛАСЬ ФУНКЦИЯ ,ПРИ ПОВТОРНОМ НАЖАТИИ ВТОРАЯ ФУНКЦИЯ ,ПРИ ТРЕТЬЕМ НАЖАТИИ СНОВА ПЕРВАЯ И ТАК ПО КРУГУ  

const burgerMenu = document.querySelector('.header__top-burger', '.navigation');
let on = 1;
function burger() {
  burgerMenu.addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('active');
    if (on == 1) {
      burgerMenu.classList.add('active');
      on = 2;
    } else {
      burgerMenu.classList.remove('active');
      on = 1;
    }
  });
}

burger();



// создание светлой и темной темы при обновлении страницы тема запоминается и остается 

const body = document.body;
const theme = document.querySelector('.theme');
let mode = 'light';

if (!localStorage.getItem('mode')) {
  localStorage.setItem('mode', mode);
} else {
  mode = localStorage.getItem('mode');
}

if (mode === 'dark') {
  themeModeToggle(mode);
}
// делается клик на 2 кнопки для смены иконки при изменении темы
theme.addEventListener('click', () => {
  document.querySelector('.theme__light').classList.toggle('active');
  document.querySelector('.theme__dark').classList.toggle('active');
// если переменная mode = светлой теме тогда при клике включается функция прописаная ниже с темной темой
// если = темной то включается переменная со светлой темой
  if (mode === 'light') {
    themeModeToggle('dark');
  } else {
    themeModeToggle('light')
  }
  localStorage.setItem('mode', mode);
});


// нажимаем на кнопку добавляется класс dark-mode вкл темная тема ,нажимаем еще раз dark-mode очищается и включается светлая тема
function themeModeToggle(newMode) {
  if (newMode === 'dark') {
    body.className = 'dark-mode';
    mode = 'dark';
  } else {
    body.className = '';
    mode = 'light';
  }
}






// Напишите код, который создает переменную company, которая представляет собой объект.
//  В объект поместите два свойства: post и name, со значениями 'developer' и 'Ivan'.После этого, выведите значение свойства post в функции
// alert.Какой будет результат ?

//   Решение с результатом ниже:

let company = {
  post: 'developer',
  name: 'Ivan'
  
};
alert(company.post);


console.log(typeof 5 !== 5);
































