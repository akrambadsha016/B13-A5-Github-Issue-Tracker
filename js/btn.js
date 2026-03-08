// all button
document.getElementById('btn-all').addEventListener('click', function () {
    showSpinner();
    document.getElementById('issues').innerHTML = '';

    // active button status
    this.classList.add('btn-primary');
    document.getElementById('btn-open').classList.remove('btn-primary');
    document.getElementById('btn-close').classList.remove('btn-primary');

    displayIssues(allIssues);
    removeSpinner();
})

// open button
document.getElementById('btn-open').addEventListener('click', function () {
    showSpinner();
    document.getElementById('issues').innerHTML = '';

    // active button status
    this.classList.add('btn-primary');
    document.getElementById('btn-all').classList.remove('btn-primary');
    document.getElementById('btn-close').classList.remove('btn-primary');

    // filtering data
    const openIssues = allIssues.filter(open => open.status === 'open');

    displayIssues(openIssues);
    removeSpinner();
})

// close button
document.getElementById('btn-close').addEventListener('click', function () {
    showSpinner();
    document.getElementById('issues').innerHTML = '';

    // active button status
    this.classList.add('btn-primary');
    document.getElementById('btn-all').classList.remove('btn-primary');
    document.getElementById('btn-open').classList.remove('btn-primary');

    // filtering data
    const closeIssues = allIssues.filter(close => close.status === 'closed');

    displayIssues(closeIssues);
    removeSpinner();
})