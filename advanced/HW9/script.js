class Student {
    marksStudent = [5, 4, 4, 5];
    marksStudentNew = [];
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName
    }
    getInfo() {
        return `Студент ${this.course}го курсу ${this.university}, м.Львів, ${this.fullName}`
    }
    get marks() {
        return this.marksStudent;
    }
    set markPluss(mark) {
        if (this.mark !== null) {
            this.marksStudent.push(mark);
        }
    }
    getAvrgMark() {
        if (this.marksStudent !== null && this.marksStudent.length > 0) {
            return (this.marksStudent.reduce((a, b) => a + b) / this.marksStudent.length).toFixed(2)

        } else {
            return 0
        }
    }
    dismiss() {
        this.marksStudentNew = this.marksStudent;
        this.marksStudent = null;
    }
    recover() {
        this.marksStudent = this.marksStudentNew;
    }
}

const andrii = new Student('НУЛП', '3', 'Чорний Андрій Мирославович');
console.log(andrii.getInfo());
console.log(andrii.marks);
andrii.markPluss = 5;
console.log(andrii.getAvrgMark());
andrii.dismiss();
console.log(andrii.marks);
andrii.recover();
console.log(andrii.marks);