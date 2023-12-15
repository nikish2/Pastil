jQuery(function ($) {
  $("#phone").mask("(999) 999-9999");
});



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


let root = document.querySelector(':root')
const theme = document.querySelector('.theme');
function themeFile () {
  theme.addEventListener('click', () => {

    root.classList.toggle('dark');
    document.querySelector('.theme__dark').classList.toggle('active');
    document.querySelector('.theme__light').classList.toggle('active');
  })
}
themeFile ();

