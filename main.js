function getInputValue() {
    var buttonValue = document.getElementById("input").value;
    var choices = buttonValue * 2;
    addPlayers(choices);
}

function moveForward(e) {
    alert(e.target.parentNode.id);
}

function moveBack() {}

const body = document.querySelector("#body");

function addPlayers(players) {
    for (var i = 0; i < players; i++) {
        var container = document.createElement("div"); //creating a container for each article
        container.setAttribute("id", `container${[i]}`); //makes css easier
        container.setAttribute("class", "container");
        body.appendChild(container); //adding a div into existing div

//        for (var x = 0; x < 11; x++) {
//            var subContainer = document.createElement("div"); //creating a container for each article
//            subContainer.setAttribute("id", `subContainer${[i]}${[x]}`);
//            subContainer.setAttribute("class", "subcontainer"); //makes css easier
//            container.appendChild(subContainer); //adding a div into existing div
//        }

        //<button id="submit" type="button" onclick="getInputValue()"></button>;

        var forward = document.createElement("button");
        forward.setAttribute("id", `forward${[i]}`);
        forward.setAttribute("type", "button");
        forward.innerText = "Forward";
        forward.setAttribute("onclick", "moveForward()");
        document
            .getElementById(`subContainer${[i]}${[0]}`)
            .appendChild(forward);

        var back = document.createElement("button");
        back.setAttribute("id", `back${[i]}`);
        back.setAttribute("type", "button");
        back.innerText = "Back";
        back.setAttribute("onclick", "moveBack()");
        document.getElementById(`subContainer${[i]}${[0]}`).appendChild(back);

        var ship = document.createElement("img");
        ship.setAttribute("id", `boat${[i]}`);
        ship.setAttribute("class", "boat");
        ship.setAttribute("src", "./images/ship.png");
        document.getElementById(`subContainer${[i]}${[5]}`).appendChild(ship);
    }
}
