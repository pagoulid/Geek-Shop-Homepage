let section1 = document.querySelector('.menu-item-1');
let section2 = document.querySelector('.menu-item-2');
let section3 = document.querySelector('.menu-item-3');
let section4 = document.querySelector('.menu-item-4');
var sections = [section1,section2,section3,section4];

let inner_list_objs = document.querySelectorAll('a');
let pars = document.querySelectorAll('.main-card-context');
let icons = document.querySelectorAll('.mobile-icon');


var whitespace = document.getElementById('whitespace');
var mouseout = false;



// first time hovering add transition delay to 0s , set delay  to 0 to other elements
// on mouseout , set transition delay back to 1.5s
sections.forEach((section)=>{
    
    section.addEventListener('mouseover',hoverHandler);
    section.addEventListener('mouseout',unhoverHandler);
    

    


});


inner_list_objs.forEach((item)=>{
    item.addEventListener('mouseover',(e)=>{e.stopImmediatePropagation()});

}); //stop bubbling to children






pars.forEach((par)=>{
    par.addEventListener('mouseover',(e)=>{e.stopPropagation()});
    par.addEventListener('mouseout',(e)=>{e.stopPropagation()});


}); // avoid event from p

icons.forEach((icon)=>{
    icon.addEventListener('mouseover',(e)=>{
        e.preventDefault();
        e.stopImmediatePropagation()});
    icon.addEventListener('mouseout',(e)=>{
        e.preventDefault();
        e.stopImmediatePropagation()});


}); // avoid event from p




async function hoverHandler(e){
        if(window.innerWidth>800){
            console.log('hover');
            console.log(e.target);
            var submenu =getSubMenu(e.currentTarget);
            
            //  set transition while waiting for current list transition

            changeToAll(e);
            setTimeout(()=>{submenu.setAttribute("style","transition-delay:0s");},2000); 
        }
        else{
            e.preventDefault();
        }

}


// when unhover whitespace is hidden , set list trransition delay back to 1.5
function unhoverHandler(e){

    if(window.innerWidth>800){
        console.log('unhover');
        console.log(e.target);
        let whitespaceDisp =getComputedStyle(window.whitespace,null).display;
    
        if(whitespaceDisp=='none'){
            window.sections.forEach((section)=>{
            var submenu =getSubMenu(section);
            submenu.setAttribute("style","transition-delay:1.5s"); 
            });
        }
    }
    else{

        e.preventDefault();
    }    
    
}


function getSubMenu(parent){
    var cardChild = parent.children[0];
    var submenu = cardChild.children[3];
    return submenu;

}

function changeToAll(event){


    window.sections.forEach((section)=>{

        if(section!=event.currentTarget){
            
            var submenu =getSubMenu(section);
            submenu.setAttribute("style","transition-delay:0s");
            

        }
    })
    
    

}






