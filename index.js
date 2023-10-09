var numberOfDrum = document.querySelectorAll(".drum").length;

//This is for the detecting the button press:

for (var i = 0; i < numberOfDrum; i++) 
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function () 
    {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });

}

//This is for the detecting the keyboard press:

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key)
{
    switch (key) 
        {
            case "w":
                var tem1 = new Audio("sounds/tom-1.mp3");
                tem1.play();
                break;
            
            case "a":
                var tem2 = new Audio("sounds/tom-2.mp3");
                tem2.play();
                break;
            
            case "s":
                var tem3 = new Audio("sounds/tom-3.mp3");
                tem3.play();
                break;

            case "d":
                var tem4= new Audio("sounds/tom-4.mp3");
                tem4.play();
                break;

            case "j":
                var tem5 = new Audio("sounds/crash.mp3");
                tem5.play();
                break;
            
            case "k":
                var tem6 = new Audio("sounds/snare.mp3");
                tem6.play();
                break;

            case "l":
                var tem7 = new Audio("sounds/kick-bass.mp3");
                tem7.play();
                break;

            default:
                console.log(buttonInnerHTML);
                break;
        }
}

function buttonAnimation(currentKey)
{
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function()
    {
        activeButton.classList.remove("pressed");
    }, 100);
}