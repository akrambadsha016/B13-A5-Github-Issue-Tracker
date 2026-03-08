document.getElementById('search-btn').addEventListener('click', function (){
    
    document.getElementById('btn-all').classList.remove('btn-primary');
    document.getElementById('btn-open').classList.remove('btn-primary');
    document.getElementById('btn-close').classList.remove('btn-primary');
    document.getElementById('issues').innerHTML = "";

  const searchItem = document.getElementById('input');
  const searchItemValue = searchItem.value.trim().toLowerCase();
  searchItem.value = '';

  fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchItemValue}`)
  .then((res) => res.json())
  .then(data => {
    const allCards = data.data;
    const searchElement = allCards.filter(card => card.title.toLowerCase().trim().includes(searchItemValue));
    displayIssues(searchElement); 
  })

})