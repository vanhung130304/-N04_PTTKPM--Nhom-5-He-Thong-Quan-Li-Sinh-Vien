document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll(".fee-checkbox");
    const totalAmountText = document.getElementById("total-amount");
    const payButton = document.querySelector(".pay-btn");
    const bankSelect = document.getElementById("bank");

    function updateTotal() {
        let total = 0;
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                total += parseInt(checkbox.dataset.amount);
            }
        });
        totalAmountText.textContent = `Tổng tiền đã chọn: ${total.toLocaleString()} VND`;
    }

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", updateTotal);
    });

    payButton.addEventListener("click", function () {
        const selectedBank = bankSelect.value;
        let total = 0;
        
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                total += parseInt(checkbox.dataset.amount);
            }
        });

        if (total === 0) {
            alert("Vui lòng chọn ít nhất một khoản thanh toán!");
            return;
        }

        if (!selectedBank) {
            alert("Vui lòng chọn ngân hàng!");
            return;
        }

        // Chuyển hướng đến trang thanh toán đơn giản
        window.location.href = `payment_page.html?amount=${total}&bank=${selectedBank}`;
    });
});
