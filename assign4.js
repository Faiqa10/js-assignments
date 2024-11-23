class Book {
    constructor(title, author, year, available) {
      this.title = title;
      this.author = author;
      this.year = year;
      this.available = available;
    }
  
    borrowBook() {
      this.available = false;
    }
  
    returnBook() {
      this.available = true;
    }
  }
  
  const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925, true);
  
  console.log(book1);
  book1.borrowBook();
  console.log(book1);
  book1.returnBook();
  console.log(book1);

  //Student management
  
  const students = [
    { name: 'Alice', age: 20, grade: 88 },
    { name: 'Bob', age: 22, grade: 75 },
    { name: 'Charlie', age: 21, grade: 92 },
    { name: 'David', age: 23, grade: 80 },
    { name: 'Eva', age: 20, grade: 95 }
  ];
  
  function getTopStudents() {
    return students.filter(student => student.grade >= 85);
  }
  
  function averageGrade() {
    const total = students.reduce((acc, student) => acc + student.grade, 0);
    return total / students.length;
  }
  
  console.log(getTopStudents());
  console.log(averageGrade());
  

  //theme change

  const body = document.body;
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
});
