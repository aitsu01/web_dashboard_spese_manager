const expenseForm = document.getElementById("expense-form");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const dateInput = document.getElementById("date");
const formMessage = document.getElementById("form-message");
const submitBtn = document.getElementById("submit-btn");

const totalExpensesEl = document.getElementById("total-expenses");
const expensesCountEl = document.getElementById("expenses-count");

const filterCategory = document.getElementById("filter-category");
const searchDescription = document.getElementById("search-description");
const sortExpenses = document.getElementById("sort-expenses");

const expensesTableBody = document.getElementById("expenses-table-body");

const chartCanvas = document.getElementById("expenses-chart");
const chartTypeSelect = document.getElementById("chart-type");
let expensesChart = null;

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let editExpenseId = null;
let messageTimeout = null;
let isProgrammaticReset = false;

function saveToLocalStorage() {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

function showMessage(message, type = "success") {
  clearTimeout(messageTimeout);

  formMessage.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
      ${message}
      <button type="button" class="btn-close" aria-label="Close" onclick="clearMessage()"></button>
    </div>
  `;

  messageTimeout = setTimeout(() => {
    clearMessage();
  }, 3000);
}

function clearMessage() {
  formMessage.innerHTML = "";
}

function setTodayDate() {
  dateInput.value = new Date().toISOString().split("T")[0];
}

function formatDate(dateString) {
  const [year, month, day] = dateString.split("-");
  return `${day}/${month}/${year}`;
}

function getCategoryBadgeClass(category) {
  switch (category) {
    case "Casa":
      return "text-bg-primary";
    case "Cibo":
      return "text-bg-success";
    case "Trasporti":
      return "text-bg-warning";
    case "Tempo libero":
      return "text-bg-info";
    case "Salute":
      return "text-bg-danger";
    default:
      return "text-bg-secondary";
  }
}

function updateSummary() {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  totalExpensesEl.textContent = `€ ${total.toFixed(2)}`;
  expensesCountEl.textContent = expenses.length;
}

function getFilteredExpenses() {
  const selectedCategory = filterCategory.value;
  const searchText = searchDescription.value.trim().toLowerCase();
  const sortValue = sortExpenses ? sortExpenses.value : "default";

  let filteredExpenses = expenses.filter((expense) => {
    const matchesCategory =
      selectedCategory === "Tutte" || expense.category === selectedCategory;

    const matchesSearch =
      expense.description.toLowerCase().includes(searchText);

    return matchesCategory && matchesSearch;
  });

  if (sortValue === "amount-asc") {
    filteredExpenses.sort((a, b) => a.amount - b.amount);
  } else if (sortValue === "amount-desc") {
    filteredExpenses.sort((a, b) => b.amount - a.amount);
  } else if (sortValue === "date-asc") {
    filteredExpenses.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (sortValue === "date-desc") {
    filteredExpenses.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  return filteredExpenses;
}

function renderExpenses() {
  const filteredExpenses = getFilteredExpenses();

  if (filteredExpenses.length === 0) {
    expensesTableBody.innerHTML = `
      <tr>
        <td colspan="5" class="text-center text-muted py-4">
          Nessuna spesa trovata.
        </td>
      </tr>
    `;
    return;
  }

  expensesTableBody.innerHTML = "";

  filteredExpenses.forEach((expense) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      
      <td class="description-cell">${expense.description}</td>
      <td>€ ${expense.amount.toFixed(2)}</td>
      <td>
        <span class="badge badge-category ${getCategoryBadgeClass(expense.category)}">
          ${expense.category}
        </span>
      </td>
      <td>${formatDate(expense.date)}</td>
      <td class="text-center actions-cell">
        <div class="actions-btns">
          <button
            type="button"
            class="btn btn-sm btn-warning action-btn"
            onclick="editExpense(${expense.id})"
          >
            <i class="bi bi-pencil-square"></i>
            <span>Modifica</span>
          </button>

          <button
            type="button"
            class="btn btn-sm btn-danger action-btn"
            onclick="deleteExpense(${expense.id})"
          >
            <i class="bi bi-trash"></i>
            <span>Elimina</span>
          </button>
        </div>
      </td>
    `;

    expensesTableBody.appendChild(row);
  });
}

function resetForm() {
  isProgrammaticReset = true;
  expenseForm.reset();
  editExpenseId = null;
  submitBtn.innerHTML = "Aggiungi spesa";
  setTodayDate();

  setTimeout(() => {
    isProgrammaticReset = false;
  }, 0);
}

function validateForm(description, amount, category, date) {
  if (!description || !category || !date || isNaN(amount)) {
    showMessage("Tutti i campi sono obbligatori.", "danger");
    return false;
  }

  if (Number(amount) <= 0) {
    showMessage("L'importo deve essere un numero maggiore di 0.", "danger");
    return false;
  }

  return true;
}

expenseForm.addEventListener("submit", function (event) {
  event.preventDefault();
  clearMessage();

  const description = descriptionInput.value.trim();
  const amount = parseFloat(amountInput.value);
  const category = categoryInput.value;
  const date = dateInput.value;

  if (!validateForm(description, amount, category, date)) {
    return;
  }

  let successMessage = "";

  if (editExpenseId !== null) {
    const expenseIndex = expenses.findIndex(
      (expense) => expense.id === editExpenseId
    );

    if (expenseIndex !== -1) {
      expenses[expenseIndex] = {
        ...expenses[expenseIndex],
        description,
        amount,
        category,
        date
      };

      successMessage = "Spesa modificata correttamente.";
    }
  } else {
    const newExpense = {
      id: Date.now(),
      description,
      amount,
      category,
      date
    };

    expenses.push(newExpense);
    successMessage = "Spesa aggiunta correttamente.";
  }

  saveToLocalStorage();
  updateSummary();
  renderExpenses();
  updateChart();
  resetForm();
  showMessage(successMessage, "success");
});

function deleteExpense(id) {
  const expenseToDelete = expenses.find((expense) => expense.id === id);
  if (!expenseToDelete) return;

  const confirmed = confirm(
    `Vuoi davvero eliminare la spesa "${expenseToDelete.description}"?`
  );

  if (!confirmed) {
    showMessage("Eliminazione annullata.", "secondary");
    return;
  }

  expenses = expenses.filter((expense) => expense.id !== id);

  saveToLocalStorage();
  updateSummary();
  renderExpenses();
  updateChart();
  showMessage("Spesa eliminata correttamente.", "info");

  if (editExpenseId === id) {
    resetForm();
  }
}

function editExpense(id) {
  const expenseToEdit = expenses.find((expense) => expense.id === id);

  if (!expenseToEdit) return;

  descriptionInput.value = expenseToEdit.description;
  amountInput.value = expenseToEdit.amount;
  categoryInput.value = expenseToEdit.category;
  dateInput.value = expenseToEdit.date;

  editExpenseId = id;
  submitBtn.innerHTML = "Salva modifica";

  showMessage(
    "Stai modificando una spesa. Aggiorna i campi e salva le modifiche.",
    "warning"
  );

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function updateChart() {
  if (!chartCanvas) return;

  const categoryTotals = {
    Casa: 0,
    Cibo: 0,
    Trasporti: 0,
    "Tempo libero": 0,
    Salute: 0,
    Altro: 0
  };

  expenses.forEach((expense) => {
    if (categoryTotals.hasOwnProperty(expense.category)) {
      categoryTotals[expense.category] += expense.amount;
    } else {
      categoryTotals["Altro"] += expense.amount;
    }
  });

  const labels = Object.keys(categoryTotals);
  const data = Object.values(categoryTotals);
  const selectedType = chartTypeSelect ? chartTypeSelect.value : "doughnut";

  if (expensesChart) {
    expensesChart.destroy();
  }

  expensesChart = new Chart(chartCanvas, {
    type: selectedType,
    data: {
      labels,
      datasets: [
        {
          label: "Spese per categoria",
          data,
          backgroundColor: [
            "rgba(13, 110, 253, 0.7)",
            "rgba(25, 135, 84, 0.7)",
            "rgba(255, 193, 7, 0.7)",
            "rgba(13, 202, 240, 0.7)",
            "rgba(220, 53, 69, 0.7)",
            "rgba(108, 117, 125, 0.7)"
          ],
          borderColor: [
            "rgba(13, 110, 253, 1)",
            "rgba(25, 135, 84, 1)",
            "rgba(255, 193, 7, 1)",
            "rgba(13, 202, 240, 1)",
            "rgba(220, 53, 69, 1)",
            "rgba(108, 117, 125, 1)"
          ],
          borderWidth: 2,
          fill: selectedType === "line" ? false : true,
          tension: selectedType === "line" ? 0.3 : 0
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: selectedType !== "bar" && selectedType !== "line",
          position: "bottom"
        }
      },
      scales:
        selectedType === "bar" || selectedType === "line"
          ? {
              y: {
                beginAtZero: true
              }
            }
          : {}
    }
  });
}

filterCategory.addEventListener("change", renderExpenses);
searchDescription.addEventListener("input", renderExpenses);

if (sortExpenses) {
  sortExpenses.addEventListener("change", renderExpenses);
}

if (chartTypeSelect) {
  chartTypeSelect.addEventListener("change", updateChart);
}

expenseForm.addEventListener("reset", function () {
  editExpenseId = null;
  submitBtn.innerHTML = "Aggiungi spesa";

  setTimeout(() => {
    setTodayDate();
  }, 0);

  if (!isProgrammaticReset) {
    clearMessage();
    showMessage("Operazione annullata. Il form è stato ripristinato.", "secondary");
  }
});

setTodayDate();
updateSummary();
renderExpenses();
updateChart();