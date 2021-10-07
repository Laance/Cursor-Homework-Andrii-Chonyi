const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const getTeams = (studentsTeams) => {
    const Teams = [];
    Teams.push([students[0]].concat(students[2]));
    Teams.push([students[1]].concat(students[3]));
    Teams.push([students[4]].concat(students[5]));
    return Teams;
};

const studentsGroups = getTeams(students);
console.log(studentsGroups);

const getTeamThemes = (student, studentsThemes) => {
    const teamThemes = [];
    teamThemes.push([student[0][0] + ' + ' + student[0][1]].concat(studentsThemes[0]));
    teamThemes.push([student[1][0] + ' + ' + student[1][1]].concat(studentsThemes[1]));
    teamThemes.push([student[2][0] + ' + ' + student[2][1]].concat(studentsThemes[2]));
    return teamThemes;
};

const teamThemes = getTeamThemes(studentsGroups, themes);
console.log(teamThemes);

const getStudentsMarks = (students, stdMark) => {
    const Mark = [];
    for(let i = 0; i < students.length; i++){
        Mark.push([students[i]].concat(stdMark[i]));
    }
    return Mark;
};

const getMark = getStudentsMarks(students, marks);
console.log(getMark);

const getTeamMark = (teamTheme)=>{
    const teamMarks = [];
    for(let i =0; i < teamTheme.length; i++){
        teamMarks.push(teamTheme[i].concat(Math.round(1+Math.random()*5)))
    }
    return teamMarks;
}
const teamThemeMark = getTeamMark(teamThemes);
console.log(teamThemeMark);