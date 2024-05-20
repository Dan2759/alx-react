import '../css/main.css';
const $ = require('jquery');
[2;2R[>77;30700;0c]10;rgb:bfbf/bfbf/bfbf]11;rgb:0000/0000/0000const _ = require('lodash');

let counter = 0;

$("<div id='logo'> </div>").appendTo('body');
$("<p>Holberton Dashboard</p>").appendTo('body');
$("<p>Dashboard data for the students</p>").appendTo('body');
$("<button>Click here to get started</button>").appendTo('body');
$("<p id='count'></p>").appendTo('body');
$("<p>Copyright - Holberton School</p>").appendTo('body');

function updateCounter() {
  counter++;
  $('#count').html(`${counter} clicks on the button`);
}

$("button").on("click", _.debounce(updateCounter, 500));
