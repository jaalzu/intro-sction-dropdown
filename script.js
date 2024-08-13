let dropdownButtons = document.querySelectorAll('.dropdown-btn');
let overlay = document.getElementById('overlay');

// MOSTRAR EL DROPDOWN

dropdownButtons.forEach(button => {
    button.addEventListener('click', () => {
        let dropdownContainer = button.nextElementSibling;
        dropdownContainer.classList.toggle('show-menu');
        

        let arrowIcon = button.querySelector('.arrow-down');
        arrowIcon.classList.toggle('arrow-up')

        
    });
});




let menuIcon = document.getElementById('menu-icon');
let navList = document.getElementById('nav-list');
let iconClose = document.getElementById('close-icon');


// MOSTRAR EL MENU 

menuIcon.addEventListener('click',() => {
    navList.classList.add('show-menu');
    overlay.classList.add('show-overlay')

    menuIcon.style.display = 'none'
    iconClose.style.display = 'block'

    
});


// FUNCION PARA REMOVER EL MENU Y TODAS LAS FUNCIONES 

iconClose.addEventListener('click',() =>{
    navList.classList.remove('show-menu')
    overlay.classList.remove('show-overlay');


    iconClose.style.display = 'none'
    menuIcon.style.display = 'block'

    
    document.querySelectorAll('.dropdown-container.show-menu').forEach(dropdown => {
        dropdown.classList.remove('show-menu')
    });

    document.querySelectorAll('.arrow-down.arrow-up').forEach(arrow => {
        arrow.classList.remove('arrow-up')
    })
})


// FUNCION QUE CUANDO TOCO EL OVERLAY SE CIERRE TODO 

overlay.addEventListener('click', () => {
    overlay.classList.remove('show-overlay');
    navList.classList.remove('show-menu');

    iconClose.style.display = 'none';
    menuIcon.style.display = 'block';

    document.querySelectorAll('.dropdown-container.show-menu').forEach(dropdown => {
        dropdown.classList.remove('show-menu')
    });

    document.querySelectorAll('.arrow-down.arrow-up').forEach(arrow => {
        arrow.classList.remove('arrow-up')
    })
    
});
