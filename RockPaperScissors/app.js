let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function main() {
    rock_div.addEventListener('click', compareResults, false);
    paper_div.addEventListener('click', compareResults, false);
    scissors_div.addEventListener('click', compareResults, false);
}
main();

function compareResults() {
    let userChoice = this.id.charAt(0);
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        computerChoice = "r";
    } else if (computerChoice == 1) {
        computerChoice = "p";
    } else if (computerChoice == 2) {
        computerChoice = "s";
    }
    console.log("user selected: %s and computer selected: %s", userChoice, computerChoice);
    switch (userChoice + computerChoice) {
        case "rr":
        case "pp":
        case "ss":
            result("t", userChoice, computerChoice);
            break;
        case "rs":
        case "sp":
        case "pr":
            result("w", userChoice, computerChoice);
            break;
        case "sr":
        case "ps":
        case "rp":
            result("l", userChoice, computerChoice);
            break;
    }
    // console.log("Scores are %d:%d", userScore, computerScore);

    function result(resultType, userChoice, computerChoice) {
        let user = rpsConvert(userChoice).fontcolor('#22AD22');
        let computer = rpsConvert(computerChoice).fontcolor('#E2584D');
        let userChoiceClassList = document.getElementById(rpsConvert(userChoice).toLowerCase()).classList;
        switch (resultType) {
            case "w":
                userScore++;
                result_div.innerHTML = `${user} beats ${computer}. User Wins!`;
                userChoiceClassList.add('green-glow');
                setTimeout(() => userChoiceClassList.remove('green-glow'), 500);
                break;
            case "l":
                computerScore++;
                result_div.innerHTML = `${computer} beats ${user}. Computer Wins!`;
                userChoiceClassList.add('red-glow');
                setTimeout(() => userChoiceClassList.remove('red-glow'), 500);
                break;
            case "t":
                result_div.innerHTML = `Both selected ${user.fontcolor('#FFFFFF')}. It's a tie!`;
                userChoiceClassList.add('gray-glow');
                setTimeout(() => userChoiceClassList.remove('gray-glow'), 500);
                break;
        }
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
    }

    function rpsConvert(rps) {
        if (rps == "r") return "Rock";
        if (rps == "p") return "Paper";
        if (rps == "s") return "Scissors";
    }
}