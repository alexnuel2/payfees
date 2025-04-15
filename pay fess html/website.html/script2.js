function searchSchool() {
    var searchTerm = document.getElementById("schoolSearch").value.trim().toLowerCase();
    var resultDiv = document.getElementById("searchResult");

    // Check if the search term is 'smbss' (case-insensitive)
    if (searchTerm === 'smbss') {
        resultDiv.innerHTML = `
            <div class="school-info">
                <h3>SMBSS School Information</h3>
                <p><strong>Name:</strong> St Micheals Boys Secondary School</p>
                <p><strong>Location:</strong> Anambra state, Eziora ozubulu </p>
                <p><strong>Mission:</strong> ''''''''''''''''</p>
            </div>
            <div class="history-button-container">
                <button class="history-button">Check School History</button>
            </div>
        `;
    } else if (searchTerm !== '') {
        resultDiv.innerHTML = '<p class="no-result">No school found with that name.</p>';
    } else {
        resultDiv.innerHTML = '';
    }
}
