const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const getTeams = (students) => {
    const teams = [];
    const man = [];
    const woman = [];
    for (let student of students){
        if (student.endsWith("а" || "я")) {
            woman.push(student)
        } else {
            man.push(student)
        }
    }
    for (let i = 0; i < man.length; i++) {
        teams.push([man[i], woman[i]])
    }
    return teams;
};

const studentsGroups = getTeams(students);
console.log(studentsGroups);

const getTeamThemes = (student) => {
    const teamThemes = [];
    for (let i = 0; i < themes.length; i++) {
        teamThemes.push([student[i][0] + " + " + student[i][1], themes[i]])
    }
    return teamThemes;
};

const teamThemes = getTeamThemes(studentsGroups);
console.log(teamThemes);

const getStudentsMarks = (students, stdMark) => {
    const mark = [];
    for(let i = 0; i < students.length; i++){
        mark.push([students[i]].concat(stdMark[i]));
    }
    return mark;
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