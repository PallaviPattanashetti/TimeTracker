import data from "../data/data.json" with { type: "json" };
///work

let workCurrentTag = document.getElementById("work-current");
let workPreviousTag = document.getElementById("work-previous");
let playCurrentTag = document.getElementById("play-current");
let studyCurrentTag = document.getElementById("study-current");
let exerciseCurrentTag = document.getElementById("exercise-current");
let socialCurrentTag = document.getElementById("social-current");
let selfcareCurrentTag = document.getElementById("selfcare-current");
let playPreviousTag = document.getElementById("play-previous");
let studyPreviousTag = document.getElementById("study-previous");
let exercisePreviousTag = document.getElementById("exercise-previous");
let socialPreviousTag = document.getElementById("social-previous");
let selfcarePreviousTag = document.getElementById("selfcare-previous");

// daily 
function getDailyHours() {
    let workDailyCurrent = data[0].timeframes.daily.current;
    workCurrentTag.innerText = workDailyCurrent + " hrs";
    let workDailyPrevious = data[0].timeframes.daily.previous;
    workPreviousTag.innerText = "Previous Day - "+ workDailyPrevious + " hrs";

    let playDailyCurrent = data[1].timeframes.daily.current;
    playCurrentTag.innerText = playDailyCurrent + " hrs";
    let playDailyPrevious = data[1].timeframes.daily.previous;
    playPreviousTag.innerText = "Previous Day - "+ playDailyPrevious + " hrs";

    let studyDailyCurrent = data[2].timeframes.daily.current;
    studyCurrentTag.innerText = studyDailyCurrent + " hrs";
    let studyDailyPrevious = data[2].timeframes.daily.previous;
    studyPreviousTag.innerText = "Previous Day - "+ studyDailyPrevious + " hrs";

    let exerciseDailyCurrent = data[3].timeframes.daily.current;
    exerciseCurrentTag.innerText = exerciseDailyCurrent + " hrs";
    let exerciseDailyPrevious = data[3].timeframes.daily.previous;
    exercisePreviousTag.innerText = "Previous Day - "+ exerciseDailyPrevious + " hrs";

    let socialDailyCurrent = data[4].timeframes.daily.current;
    socialCurrentTag.innerText = socialDailyCurrent + " hrs";
    let socialDailyPrevious = data[4].timeframes.daily.previous;
    socialPreviousTag.innerText = "Previous Day - "+ socialDailyPrevious + " hrs";

    let selfcareDailyCurrent = data[5].timeframes.daily.current;
    selfcareCurrentTag.innerText = selfcareDailyCurrent + " hrs";
    let selfcareDailyPrevious = data[5].timeframes.daily.previous;
    selfcarePreviousTag.innerText = "Previous Day - "+ selfcareDailyPrevious + " hrs";

}

// weekly 
function getWeeklyHours() {
    let workWeeklyCurrent = data[0].timeframes.weekly.current; 
    workCurrentTag.innerText = workWeeklyCurrent + " hrs";
    let workWeeklyPrevious = data[0].timeframes.weekly.previous;
    workPreviousTag.innerText = "Last Week - "+ workWeeklyPrevious + " hrs";

    let playWeeklyCurrent = data[1].timeframes.weekly.current;
    playCurrentTag.innerText = playWeeklyCurrent + " hrs";
    let playWeeklyPrevious = data[1].timeframes.weekly.previous;
    playPreviousTag.innerText = "Last Week - "+ playWeeklyPrevious + " hrs";

    let studyWeeklyCurrent = data[2].timeframes.weekly.current;
    studyCurrentTag.innerText = studyWeeklyCurrent + " hrs";
    let studyWeeklyPrevious = data[2].timeframes.weekly.previous;
    studyPreviousTag.innerText = "Last Week - "+ studyWeeklyPrevious + " hrs";

    let exerciseWeeklyCurrent = data[3].timeframes.weekly.current; 
    exerciseCurrentTag.innerText = exerciseWeeklyCurrent + " hrs";
    let exerciseWeeklyPrevious = data[3].timeframes.weekly.previous;
    exercisePreviousTag.innerText = "Last Week - "+ exerciseWeeklyPrevious + " hrs";

    let socialWeeklyCurrent = data[4].timeframes.weekly.current; 
    socialCurrentTag.innerText = socialWeeklyCurrent + " hrs";
    let socialWeeklyPrevious = data[4].timeframes.weekly.previous;
    socialPreviousTag.innerText = "Last Week - "+ socialWeeklyPrevious + " hrs";

    let selfcareWeeklyCurrent = data[5].timeframes.weekly.current; 
    selfcareCurrentTag.innerText = selfcareWeeklyCurrent + " hrs";
    let selfcareWeeklyPrevious = data[5].timeframes.weekly.previous;
    selfcarePreviousTag.innerText = "Last Week - "+ selfcareWeeklyPrevious + " hrs";

}

// monthly 
function getMonthlyHours() {
    let workMonthlyCurrent = data[0].timeframes.monthly.current;
    workCurrentTag.innerText = workMonthlyCurrent + " hrs";
    let workMonthlyPrevious = data[0].timeframes.monthly.previous;
    workPreviousTag.innerText = "Last Month - "+ workMonthlyPrevious + " hrs";

    let playMonthlyCurrent = data[1].timeframes.monthly.current;
    playCurrentTag.innerText = playMonthlyCurrent + " hrs";
    let playMonthlyPrevious = data[1].timeframes.monthly.previous;
    playPreviousTag.innerText = "Last Month - "+ playMonthlyPrevious + " hrs";

    let studyMonthlyCurrent = data[2].timeframes.monthly.current;
    studyCurrentTag.innerText = studyMonthlyCurrent + " hrs";
    let studyMonthlyPrevious = data[2].timeframes.monthly.previous;
    studyPreviousTag.innerText = "Last Month - "+ studyMonthlyPrevious + " hrs";

    let exerciseMonthlyCurrent = data[3].timeframes.monthly.current;
    exerciseCurrentTag.innerText = exerciseMonthlyCurrent + " hrs";
    let exerciseMonthlyPrevious = data[3].timeframes.monthly.previous;
    exercisePreviousTag.innerText = "Last Month - "+ exerciseMonthlyPrevious + " hrs";

    let socialMonthlyCurrent = data[4].timeframes.monthly.current;
    socialCurrentTag.innerText = socialMonthlyCurrent + " hrs";
    let socialMonthlyPrevious = data[4].timeframes.monthly.previous;
    socialPreviousTag.innerText = "Last Month - "+ socialMonthlyPrevious + " hrs";

    let selfcareMonthlyCurrent = data[5].timeframes.monthly.current;
    selfcareCurrentTag.innerText = selfcareMonthlyCurrent + " hrs";
    let selfcareMonthlyPrevious = data[5].timeframes.monthly.previous;
    selfcarePreviousTag.innerText = "Last Month - "+ selfcareMonthlyPrevious + " hrs";
}

// buttons
document.getElementById("DailyButton").addEventListener("click", getDailyHours);
document.getElementById("WeeklyButton").addEventListener("click", getWeeklyHours);
document.getElementById("MonthlyButton").addEventListener("click", getMonthlyHours);