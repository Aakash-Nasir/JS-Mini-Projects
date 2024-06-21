document.addEventListener('DOMContentLoaded',function () {
    //select all buttons with the class button
    const buttons = document.querySelectorAll('.button');

    // Add event listener to all buttons
    buttons.forEach(button => {
        button.addEventListener('click' , function () {
            // get the id of the clicked button which corresponds to the color
            const color = this.id;
            //change the background color of the body
            document.body.style.backgroundColor = color;
        });
    });
});