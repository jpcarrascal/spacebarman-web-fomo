window.onload = function() {
    let listenButton = document.querySelector('#listen-button');
    let listenDropdown = document.querySelector('#listen-dropdown');

    listenButton.onclick = function(event){
        event.stopPropagation();
        const clickedItem = event.target;
        if(clickedItem.hasAttribute("service-link"))
        {
            const clickedService = clickedItem.getAttribute("service-link");
            gtag('event', clickedService, {
                'event_category': 'music-service-link-click',
                'event_label': 'FOMO-launch',
                'value': 0
              });
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