import fs from"fs";

// 1 & 2: Create, Write & Read Initial Details
fs.writeFileSync('student.txt', 'Name: Rahul\nRoll Number: 101\nBranch: CSE\nSemester: 3\n');
console.log("Created successfully!\n" + fs.readFileSync('student.txt', 'utf8'));

// 3 & 4: Update (Append) & Read Updated File
fs.appendFileSync('student.txt', 'Subject: Full Stack Development\nMarks: 85\nAttendance: 92%\n');
console.log("Updated successfully!\n" + fs.readFileSync('student.txt', 'utf8'));
