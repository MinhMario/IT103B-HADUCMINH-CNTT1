let students = [
  { id: 1, name: "Nguyen Van An", age: 20, gpa: 8.5, status: "active"},
  { id: 2, name: "Tran Thi Bich", age: 17, gpa: 7.2, status: "active" },
  { id: 3, name: "Le Hoang Cuong", age: 22, gpa: 9.1, status: "inactive" },
  { id: 4, name: "Pham Thi Dung", age: 19, gpa: 6.8, status: "active" },
];
let choice;
do {
    choice = +prompt(`
            1. Create Student
            2. Read All Students
            3. Filter Scholarship Candidates
            4. Update Student Profile
            5. Delete Record
            6.Compliance Verification
            7.Academic Statistics
            8.Data Normalization
            0. Exit
            Your choice: 
            `)
    switch (choice) {
        case 1:
            let askName = prompt("New name: ");
            let askAge = prompt("New age: ");
            let askGpa = prompt("New Gpa: ");
            let askStatus = prompt("New Status: ");
            let askId = prompt("New id: ");
            let check = students.some((value) => {
                return value.id == askId;
            })
            if (check) {
                alert("Id is already existed");
                break;
            } else {

                let newStudent = {
                    id: askId,
                    name: askName,
                    age: askAge,
                    gpa: askGpa,
                    status: askStatus,
                }
                students.push(newStudent);
                alert(`Added successfully`);
            }
            break;
        case 2:
            for (let i = 0; i < students.length; i++) {
                console.log(`
                        Id: ${students[i].id} - Name:${students[i].name} - Age: ${students[i].age} - Gpa: ${students[i].gpa} - Status:${students[i].status}
                        `);

            }
            alert("Check result in console");
            break;
        case 3:
            let result = students.filter((value) => {
                return value.gpa > 8.0
            })
            result.forEach((value) => {
                console.log(`
                        Id: ${value.id} - Name:${value.name} - Age: ${value.age} - Gpa: ${value.gpa} - Status:${value.status}
                        `);

            })
            alert("Check result in console!");
            break;
        case 4:
            let updId = prompt("Enter student's id that you want to update information: ");
            let checkId = students.find((value) => {
                return value.id == updId;
            })
            if (!checkId) {
                alert("Id is not existed");
            } else {
                let updName = prompt("New name: ");
                let updGpa = prompt("New Gpa: ");
                checkId.name = updName
                checkId.gpa = updGpa
            }
            alert("Updated informations")
            break;
        case 5:
            let delId = prompt("Enter student's id that you want to delete information: ");
            let checkIdDel = students.find((value) => {
                return value.id == delId;
            })
            if (!checkIdDel) {
                alert("Id is not existed");
            } else {
                delete checkIdDel.id;
                delete checkIdDel.name;
                delete checkIdDel.age;
                delete checkIdDel.gpa;
                delete checkIdDel.status;
            }
            alert("Deleted informations")
            break;
        case 6:
            let conclusion = students.filter((value) => {
                return value.age < 18;
            })
            let decide = conclusion.every((value) => {
                return value.status == "active";
            })
            if (decide) {
                alert("All below 18 accounts are actived");
            } else {
                alert("At least 1 of below 18 accounts is inactivated");
            }
            break;
        case 7:
            let avarage = students.reduce((acc, value) => {
                return (acc + value.gpa) / students.length;
            }, 0)
            alert(`Average gpa: ${avarage}`)
            break;
        case 8:
            students.map((value) => {
                return console.log(`
                        Id: ${value.id} - Name:${value.name.toUpperCase()} - Age: ${value.age} - Gpa: ${value.gpa} - Status:${value.status}
                        `);
                ;
            })
            alert("Check result in console!");
            break;
        case 0:
            alert("See ya");
            break;
        default:
            alert("Invailid choice!");
            break;
    }
} while (choice != 0);