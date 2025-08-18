function findTheCommomInterestInBooks(inputStudentsDetails) {

  // checking whether the input is array or not
  if (!Array.isArray(inputStudentsDetails)) {
    console.error("Invalid input! input is not an array");
    return false;
  }

  // checking for empty array
  if (inputStudentsDetails.length === 0) {
    console.error("you have entered an empty array");
    return false;
  }

  //checking for the first element to be non zero
  if (inputStudentsDetails.length < 2) {
    console.error("the array must conatin two input");
    return false;
  }


  // creating a map to store names having books
  const studentsHavingBooks = new Map();

  for (let student of inputStudentsDetails) {

    // skipping invalid items in array
    if (!student || typeof student !== "object" || !Array.isArray(student.books) || typeof student.name !== "string") {
      continue;
    }
    for (let book of student.books) {
      if (!studentsHavingBooks.has(book)) {
        studentsHavingBooks.set(book, []);
      }
      studentsHavingBooks.get(book).push(student.name);
    }
  }

  // printing the names according to book interest
  console.log("Book Interests:");
  for (let book of studentsHavingBooks.keys()) {
    const namesOfStudent = studentsHavingBooks.get(book);
    console.log(`${book} - [${namesOfStudent.join(', ')}]`);
  }

  // creating second map where we check for people sharing most interest with other
  const sharedInterestMap = new Map();

  for (let student of inputStudentsDetails) {
    sharedInterestMap.set(student.name, []);
  }
  for (let book of studentsHavingBooks.keys()) {
    const names = studentsHavingBooks.get(book);
    for (let i = 0; i < names.length; i++) {
      for (let j = 0; j < names.length; j++) {
        if (i !== j) {
          const sharedList = sharedInterestMap.get(names[i]);
          // Manually check for duplicates before adding
          let alreadyExists = false;
          for (let k = 0; k < sharedList.length; k++) {
            if (sharedList[k] === names[j]) {
              alreadyExists = true;
              break;
            }
          }
          if (!alreadyExists) {
            sharedList.push(names[j]);
          }
        }
      }
    }
  }

  //  maximum shared interests
  let maxInterestShared = 0;
  let maxSharedStudents = [];

  for (let nameOfStudent of sharedInterestMap.keys()) {
    const namesSharedWith = sharedInterestMap.get(nameOfStudent);
    const countOfNames = namesSharedWith.length;
    if (countOfNames > maxInterestShared) {
      maxInterestShared = countOfNames;
      maxSharedStudents = [nameOfStudent];
    } else if (countOfNames === maxInterestShared) {
      maxSharedStudents.push(nameOfStudent);
    }
  }

  console.log("\nMost shared interests:");
  console.log(maxSharedStudents);
  return maxSharedStudents;
}



const studentInformation = [
  {
    id: 0,
    name: "Arun",
    books: ["Wings of Fire", "Chakra"],
  },
  {
    id: 1,
    name: "Ashok",
    books: ["Chakra", "War and Peace", "The Shining"]
  },
  {
    id: 2,
    name: "Balu",
    books: ["Wings of Fire", "All about Cricket"],
  },
  {
    id: 3,
    name: "Cathi",
    books: ["Against the wind", "The Shining", "War and Peace"]
  },
];
findTheCommomInterestInBooks(studentInformation);