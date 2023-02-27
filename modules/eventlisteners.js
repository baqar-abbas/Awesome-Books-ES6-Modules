import {
  list, listPage, addNew, addBooksPage, contact, contactPage,
} from './variables.js';

const addListEventListener = () => {
  list.addEventListener('click', () => {
    contactPage.style.display = 'none';
    addBooksPage.style.display = 'none';
    listPage.style.display = 'block';
    list.style.color = 'blue';
    addNew.style.color = 'black';
    contact.style.color = 'black';
  });

  addNew.addEventListener('click', () => {
    contactPage.style.display = 'none';
    addBooksPage.style.display = 'block';
    listPage.style.display = 'none';
    list.style.color = 'black';
    addNew.style.color = 'blue';
    contact.style.color = 'black';
  });

  contact.addEventListener('click', () => {
    contactPage.style.display = 'block';
    addBooksPage.style.display = 'none';
    listPage.style.display = 'none';
    list.style.color = 'black';
    addNew.style.color = 'black';
    contact.style.color = 'blue';
  });
};

export default addListEventListener;