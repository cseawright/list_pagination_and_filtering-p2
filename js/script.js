//declaring the two global variables to display the list items by 10's
const listItem = document.getElementsByClassName('student-item cf');
const shownItems = 10;


//created the `showPage` function to hide all of the items in the 
//list except for the ten you want to show.

const showPage = (list, page) => {
    let startIndex = (page * shownItems) - shownItems;
    let endIndex = page * shownItems;
    
    for (let i = 0; i < list.length; i++){
        if (i >= startIndex && i < endIndex){
            list[i].style.display = 'block';
        }else{
            list[i].style.display = 'none';
        }
        
    }
}

showPage(listItem, 1);


//created the `appendPageLinks function` to generate, append, and add 
//functionality to the pagination buttons.

const appendPageLinks = (list) => {
    const pagesNeeded = (Math.ceil(list.length / shownItems));
    const div = document.createElement('div');
    div.className = 'pagination';
    const pageDiv = document.querySelector('.page');
    pageDiv.appendChild(div);
    const ul = document.createElement('ul');
    div.appendChild(ul);
    
    
//created numbered links depending on how many pages are needed
    
    for (let i=1; i <= pagesNeeded; i++){
        const li = document.createElement('li');
        const a = document.createElement('a');
        ul.appendChild(li);
        li.appendChild(a);
        a.textContent = i;
        a.setAttribute('href', '#');
        
        //const aLinks = document.getElementsByTagName('a');
//used an event listener to determine which link is being clicked
//if there are more than one link with the active class then a condition is run
//in order to remove the active class from all links except the one that was most 
//recently clicked
        
        a.addEventListener('click', (e) => {
        //let pageLinks = document.querySelectorAll('a');
        const clicked = e.target;
        showPage(list, i);
        
        const activeNow = document.getElementsByClassName('active');
        if (activeNow.length > 0){
            activeNow.className = activeNow[0].classList.remove('active');
            
        }
        
       clicked.className = 'active';
    });
    
        
    }
    
    
    
}

appendPageLinks(listItem);

