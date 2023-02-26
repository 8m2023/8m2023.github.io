const form = document.querySelector("form");
const inputs = form.elements;

const registeredUsers = [
    ["aysel", "D8tSF5"],
    ["ulyana", "gE5Cv"],
    ["dasha_v", "a68NT"],
    ["dasha_l", "4ZKayh"],
    ["marina", "9eDZ"],
    ["diana", "St3F"],
    ["alena", "U3kh"],
    ["kira", "qsnH3t"],
    ["emilia", "U78p"],
    ["anya", "4hSZ"],
    ["arina", "xB82m"],
    ["admin", "t147f2"]
];

function isValid(username, password) {   
    for(var i = 0; i < registeredUsers.length; i++) {
        var temp = registeredUsers[i];
        if (temp[0] == username) {
            var currentPair = temp;
            break;        
        }        
    }     
    if (currentPair && currentPair[1] == password) {
        return true;           
    } else {
        return false;
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    var username = inputs["login"].value;
    var password = inputs["password"].value;  
    if (!isValid(username, password)){        
        alert('Неверный логин или пароль');
    } else {      
        alert('Верные данные');

        if (username == "arina") {
            window.open("arina_l.html");
        }

        if (username == "aysel") {
            window.open("aysel_l.html");
        }

        if (username == "ulyana") {
            window.open("ulyana_l.html");
        }

        if (username == "dasha_v") {
            window.open("dasha_v_l.html");
        }

        if (username == "dasha_l") {
            window.open("dasha_l_l.html");
        }

        if (username == "marina") {
            window.open("marina_l.html");
        }

        if (username == "diana") {
            window.open("diana_l.html");
        }

        if (username == "alena") {
            window.open("alena_l.html");
        }

        if (username == "kira") {
            window.open("kira_l.html");
        }

        if (username == "emilia") {
            window.open("emilia_l.html");
        }

        if (username == "anya") {
            window.open("anya_l.html");
        }

        if (username == "admin") {
            window.open("admin.html");
        }
    }
});