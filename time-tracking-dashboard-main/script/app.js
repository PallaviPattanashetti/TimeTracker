import data from "./data/data.json" with { type: "json" };
///work

let workCurrentTag = document.getElementById("work-current");
let playCurrentTag = document.getElementById("play-current");
let studyCurrentTag = document.getElementById("study-current");
let exerciseCurrentTag = document.getElementById("exercise-current");
let socialCurrentTag = document.getElementById("social-current");
let selfcareCurrentTag = document.getElementById("selfcare-current");

// daily 
function getDailyHours() {
    let workDailyCurrent = data[0].timeframes.daily.current;
    workCurrentTag.innerText = workDailyCurrent + " hrs";

    let playDailyCurrent = data[1].timeframes.daily.current;
    playCurrentTag.innerText = playDailyCurrent + " hrs";

    let studyDailyCurrent = data[2].timeframes.daily.current;
    studyCurrentTag.innerText = studyDailyCurrent + " hrs";

    let exerciseDailyCurrent = data[3].timeframes.daily.current;
    exerciseCurrentTag.innerText = exerciseDailyCurrent + " hrs";

    let socialDailyCurrent = data[4].timeframes.daily.current;
    socialCurrentTag.innerText = socialDailyCurrent + " hrs";

    let selfcareDailyCurrent = data[5].timeframes.daily.current;
    selfcareCurrentTag.innerText = selfcareDailyCurrent + " hrs";
}

// weekly 
function getWeeklyHours() {
    
    let workWeeklyCurrent = data[0].timeframes.weekly.current; 
    workCurrentTag.innerText = workWeeklyCurrent + " hrs";

    let playWeeklyCurrent = data[1].timeframes.weekly.current;
    playCurrentTag.innerText = playWeeklyCurrent + " hrs";

    let studyWeeklyCurrent = data[2].timeframes.weekly.current;
    studyCurrentTag.innerText = studyWeeklyCurrent + " hrs";

    let exerciseWeeklyCurrent = data[3].timeframes.weekly.current; 
    exerciseCurrentTag.innerText = exerciseWeeklyCurrent + " hrs";

    let socialWeeklyCurrent = data[4].timeframes.weekly.current; 
    socialCurrentTag.innerText = socialWeeklyCurrent + " hrs";

    let selfcareWeeklyCurrent = data[5].timeframes.weekly.current; 
    selfcareCurrentTag.innerText = selfcareWeeklyCurrent + " hrs";
}

// monthly 
function getMonthlyHours() {
    let workMonthlyCurrent = data[0].timeframes.monthly.current;
    workCurrentTag.innerText = workMonthlyCurrent + " hrs";

    let playMonthlyCurrent = data[1].timeframes.monthly.current;
    playCurrentTag.innerText = playMonthlyCurrent + " hrs";

    let studyMonthlyCurrent = data[2].timeframes.monthly.current;
    studyCurrentTag.innerText = studyMonthlyCurrent + " hrs";

    let exerciseMonthlyCurrent = data[3].timeframes.monthly.current;
    exerciseCurrentTag.innerText = exerciseMonthlyCurrent + " hrs";

    let socialMonthlyCurrent = data[4].timeframes.monthly.current;
    socialCurrentTag.innerText = socialMonthlyCurrent + " hrs";

    let selfcareMonthlyCurrent = data[5].timeframes.monthly.current;
    selfcareCurrentTag.innerText = selfcareMonthlyCurrent + " hrs";
}

// buttons
document.getElementById("DailyButton").addEventListener("click", getDailyHours);
document.getElementById("WeeklyButton").addEventListener("click", getWeeklyHours);
document.getElementById("MonthlyButton").addEventListener("click", getMonthlyHours);