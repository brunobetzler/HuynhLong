document.addEventListener("DOMContentLoaded", () => {
    const currentDate = document.getElementById("currentDate");
    const today = new Date("2024-11-18"); // Ngày hiện tại mẫu
    let displayDate = new Date(today);

    // Lấy tất cả các ô ngày (Thứ 2 -> Chủ nhật)
    const dayHeaders = document.querySelectorAll(".schedule th:not(:first-child)");

    // Hàm cập nhật toàn bộ ngày trong lịch
    const updateScheduleDates = (startDate) => {
        const options = { day: "2-digit", month: "2-digit", year: "numeric" };
        for (let i = 0; i < dayHeaders.length; i++) {
            const newDate = new Date(startDate);
            newDate.setDate(startDate.getDate() + i); // Cộng i ngày vào ngày bắt đầu
            const [day, month, year] = newDate.toLocaleDateString("vi-VN", options).split("/");
            dayHeaders[i].innerHTML = `Thứ ${i + 2}<br>${day}/${month}/${year}`;
        }
    };

    // Hàm cập nhật ngày hiển thị chính và lịch
    const updateDate = (date) => {
        const options = { day: "2-digit", month: "2-digit", year: "numeric" };
        currentDate.textContent = date.toLocaleDateString("vi-VN", options);
        const mondayDate = new Date(date); // Lấy ngày bắt đầu tuần (Thứ 2)
        mondayDate.setDate(mondayDate.getDate() - mondayDate.getDay() + 1); // Đặt về Thứ 2
        updateScheduleDates(mondayDate);
    };

    // Xử lý sự kiện bấm "Trở về", "Tiếp", "Hiện tại"
    document.getElementById("prevWeek").addEventListener("click", () => {
        displayDate.setDate(displayDate.getDate() - 7); // Lùi 7 ngày
        updateDate(displayDate);
    });

    document.getElementById("nextWeek").addEventListener("click", () => {
        displayDate.setDate(displayDate.getDate() + 7); // Tiến 7 ngày
        updateDate(displayDate);
    });

    document.getElementById("currentWeek").addEventListener("click", () => {
        displayDate = new Date(today); // Trở về ngày hiện tại
        updateDate(displayDate);
    });

    // Cập nhật lịch lần đầu khi trang được tải
    updateDate(displayDate);
});
