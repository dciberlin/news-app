// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/

const searchInput = document.querySelector('#news-search');

searchInput.onkeyup = getValue;

function getValue(e) {
  console.log(e.srcElement.value);
}
