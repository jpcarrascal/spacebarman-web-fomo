window.onload = function() {
    let listenButton = document.querySelector('#listen-button');
    let listenDropdown = document.querySelector('#listen-dropdown');
    let musicServiceLink = document.querySelector('.play-service');

    listenButton.onclick = function(event){
        event.stopPropagation();
        const clickedItem = event.target;
        if(clickedItem.hasAttribute("service-link"))
        {
            const clickedService = clickedItem.getAttribute("service-link");
            ga('send', 'event', 'music-service-link-click', clickedService, 'FOMO-launch', 0);
            console.log(clickedService + " clicked.")
        }
        if(listenDropdown.style.display == "block")
            listenDropdown.style.display = "none";
        else
            listenDropdown.style.display = "block";
    }

    window.onkeyup = function(event){
        if(event.key == "Escape")
            listenDropdown.style.display = "none";
    }
    document.querySelector("body").onclick = function(event){
        listenDropdown.style.display = "none";
    }


};