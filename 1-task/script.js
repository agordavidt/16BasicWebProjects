const maxSavedCounts = 3;
let counts = [];
let currentCount = 0;
const countDisplayEl = document.getElementById("countDisplay");
const countButtonEl = document.getElementById("countButton");
const saveButtonEl = document.getElementById("saveButton");
const savedCounts = document.getElementById("savedCounts");

function updateCount() {
    countDisplayEl.textContent = currentCount;
}

countButtonEl.addEventListener("click", () => {
    currentCount++;
    updateCount();
});

saveButtonEl.addEventListener("click", () => {
    if (currentCount > 0) {
        counts.unshift(currentCount);
        currentCount = 0;

        if (counts.length > maxSavedCounts) {
            counts.pop();
        }

        updateSavedCounts();
        updateCount();
    }
});

function updateSavedCounts() {
    savedCounts.innerHTML = "";
    counts.forEach((count, index) => {
        const savedCount = document.createElement("p");
        savedCount.textContent = `Saved ${index + 1}: ${count}`;
        savedCounts.appendChild(savedCount);
    });
}

updateCount();
