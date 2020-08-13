window.onload = function() {
    let listenButton = document.querySelector('#listen-button');
    let listenDropdown = document.querySelector('#listen-dropdown');

    listenButton.onclick = function(){
        if(listenDropdown.style.display == "block")
            listenDropdown.style.display = "none";
        else
            listenDropdown.style.display = "block";
    }

    window.onkeyup = function(event){
        if(event.key == "Escape")
            listenDropdown.style.display = "none";
    }



};