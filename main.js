let homeEl = document.getElementById("home-score");
let guestEl = document.getElementById("guest-score");
let homeScore = 0;
let guestScore = 0;

function increment(amount,team){
    if (amount == 1){
        if (team == "home"){
            homeScore +=1;
            homeEl.innerText = homeScore;
        }
        else{
            guestScore +=1;
            guestEl.innerText = guestScore;
        }
    }
    else if (amount == 2){
        if (team == "home"){
            homeScore +=2;
            homeEl.innerText = homeScore;
        }
        else{
            guestScore +=2;
            guestEl.innerText = guestScore;
        }
    }
    else {
        if (team == "home"){
            homeScore +=3;
            homeEl.innerText = homeScore;
        }
        else{
            guestScore +=3;
            guestEl.innerText = guestScore;
        }
    }
}
