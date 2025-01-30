document.addEventListener("DOMContentLoaded", () => {
  const burgerForm = document.getElementById("burgerForm");
  const orderSummary = document.getElementById("orderSummary");
  const summaryText = document.getElementById("summaryText");

  burgerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(burgerForm);
    let summary = "You have selected:\n";

    summary += `Bun: ${formData.get("bun")}\n`;
    summary += `Patty: ${formData.get("patty")}\n`;

    const toppings = formData.getAll("toppings").join(", ") || "No toppings";
    summary += `Toppings: ${toppings}\n`;

    summary += `Sauce: ${formData.get("sauce")}\n`;

    const extras = formData.getAll("extras").join(", ") || "No extras";
    summary += `Extras: ${extras}\n`;

    summaryText.textContent = summary;
    orderSummary.classList.remove("hidden");

    // Redirect to payment page after showing the summary
    setTimeout(() => {
      window.location.href = "payment.html";
    }, 3000);
  });
});
