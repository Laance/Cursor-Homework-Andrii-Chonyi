class Student {
    
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marksStudent = [5, 4, 4, 5];
        this.isDismissed=false;
    }
    getInfo() {
        return `Студент ${this.course}го курсу ${this.university}, м.Львів, ${this.fullName}`
    }
    get marks() {
        return this.isDismissed ? `CТудент виключений` : this.marksStudent;
    }
    set marks(mark) {
        return this.isDismissed ? `CТудент виключений` : this.marksStudent.push(mark);
    }
    getAvrgMark() {
            return this.isDismissed ? `CТудент виключений` : (this.marksStudent.reduce((a, b) => a + b) / this.marksStudent.length).toFixed(2)
    }
    dismiss() {
        this.isDismissed = true;
    }
    recover() {
        this.isDismissed = false;
        return `Cтудент ${this.fullName} навчається`;
    }
}

const andrii = new Student('НУЛП', '3', 'Чорний Андрій Мирославович');
console.log(andrii.getInfo());
console.log(andrii.marks);
andrii.marks = 5;
console.log(andrii.getAvrgMark());
andrii.dismiss();
console.log(andrii.marks);
andrii.recover();
andrii.marks = 3;
console.log(andrii.marks);