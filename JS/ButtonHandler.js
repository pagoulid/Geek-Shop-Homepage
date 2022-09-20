function ButtonHandler(num){

    let width = window.innerWidth;
    if(width<=800){
        let field = document.querySelector('.visible-item-'+num);
        let show = document.querySelector('.visible-show-icon-'+num);
        let close = document.querySelector('.visible-close-icon-'+num);
    
        
        field.classList.toggle('hidden-item-'+num);

        /*button icon manipulation*/
        show.classList.toggle('hidden-show-icon-'+num);
        close.classList.toggle('hidden-close-icon-'+num);

        //$(this).find("i").removeClass('fa fa-plus-circle');//.addClass('far fa-times-circle');

    }
 

}