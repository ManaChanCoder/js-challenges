/*
Filter out only the enrolled students.
Map them into a message like:
"✅ [name] is enrolled."
If some students are not enrolled, print:
"⚠️ Some students are not enrolled."
Otherwise, print:
"🎉 Everyone is enrolled!"
*/

const students = [
  { name: "Rhogenn", isEnrolled: true },
  { name: "Michael", isEnrolled: false },
  { name: "Joshua", isEnrolled: true },
  { name: "Brent", isEnrolled: false },
  { name: "Kc", isEnrolled: false },
];

const enrolled = students.filter((student) => student.isEnrolled);

enrolled.forEach((listEnrolled) => {
  console.log(listEnrolled);
});

if (enrolled.length < students.length) {
  console.log("Some of student are enrolled!");
} else {
  console.log("Everyone is enrolled!");
}
