// Dữ liệu mẫu cho học kỳ, môn học, và lớp học
const data = {
    "2024-1": [
      {
        subject: "Toán rời rạc",
        classes: [
          { id: "Lớp A203", slots: 5 },
          { id: "Lớp A704", slots: 0 }, // Hết chỗ
          { id: "Lớp B864", slots: 3 }
        ]
      },
      {
        subject: "Lập trình C++",
        classes: [
          { id: "Lớp G973", slots: 2 },
          { id: "Lớp D973", slots: 0 }, // Hết chỗ
          { id: "Lớp U901", slots: 1 }
        ]
      }
    ],
    "2024-2": [
      {
        subject: "Cơ sở dữ liệu",
        classes: [
          { id: "Lớp A973", slots: 4 },
          { id: "Lớp K276", slots: 0 }
        ]
      }
    ],
    "2024-3": [
      {
        subject: "Trí tuệ nhân tạo",
        classes: [
          { id: "Lớp A042", slots: 10 },
          { id: "Lớp A252", slots: 0 }
        ]
      }
    ]
  };
  
  // DOM Elements
  const semesterSelect = document.getElementById("semesterSelect");
  const subjectStep = document.getElementById("subjectStep");
  const subjectList = document.getElementById("subjectList");
  const classStep = document.getElementById("classStep");
  const classList = document.getElementById("classList");
  
  // Khi chọn học kỳ
  semesterSelect.addEventListener("change", () => {
    const selectedSemester = semesterSelect.value;
    if (selectedSemester && data[selectedSemester]) {
      renderSubjects(data[selectedSemester]);
      subjectStep.style.display = "block";
      classStep.style.display = "none";
    }
  });
  
  // Hiển thị danh sách môn học
  function renderSubjects(subjects) {
    subjectList.innerHTML = "";
    subjects.forEach((subject, index) => {
      const li = document.createElement("li");
      li.textContent = subject.subject;
      li.addEventListener("click", () => {
        renderClasses(subject.classes);
        classStep.style.display = "block";
      });
      subjectList.appendChild(li);
    });
  }
  
  // Hiển thị danh sách lớp học
  function renderClasses(classes) {
    classList.innerHTML = "";
    classes.forEach((classItem) => {
      const li = document.createElement("li");
      li.textContent = `${classItem.id} (Còn ${classItem.slots} chỗ)`;
      if (classItem.slots === 0) {
        li.classList.add("disabled");
      } else {
        li.addEventListener("click", () => {
          alert(`Bạn đã đăng ký thành công ${classItem.id}!`);
          classItem.slots -= 1; // Giảm số lượng chỗ
          renderClasses(classes); // Cập nhật lại danh sách lớp
        });
      }
      classList.appendChild(li);
    });
  }
  