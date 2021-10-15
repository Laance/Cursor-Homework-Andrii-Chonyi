const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];

  const getSubjects = (student) => {
    return Object.keys(student.subjects)
    .map((subj) => subj[0].toUpperCase() + subj.slice(1).toLowerCase()
    .replace("_", " "));
  }
  console.log('Subjects:', getSubjects(students[0]));

  const getAverageMark = (student) =>{
      const marks = [];
      let avrgMarks = 0;
      for (const key in student.subjects){
        marks.push(...student.subjects[key]);
	    avrgMarks = marks.reduce((sum, mark) => (sum + mark)) / marks.length;
    }
    return avrgMarks.toFixed(2);
    }    
  console.log('Avrgmark:', getAverageMark(students[0]));

  const getStudentInfo = (student) =>{
      return {course: student.course,
              name: student.name,
              averageMark: getAverageMark(student)
      }
  }
  console.log('Info', getStudentInfo(students[0]));

  const getStudentsNames = (students) => {
     return students.map(item => item.name).sort();
  }
 console.log('Sorted names:', getStudentsNames(students));

 const getBestStudent = (students) => {
     return students.reduce((accum, index) => getAverageMark(accum) > getAverageMark(index)? accum : index).name
 }
 console.log('Best student is:', getBestStudent(students));

 const calculateWordLetters = (word) =>{
     const tempWord = word.split('');
     const res = {};
     tempWord.forEach(element => (!res[element] ? res[element]=1 : res[element] +=1));
    return res;
 }
 console.log(calculateWordLetters('тест'));