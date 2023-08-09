const input = document.querySelector('#input-box');
const button = document.querySelector('.btn');
const listContainer = document.querySelectorAll('.list-container')[0];

button.addEventListener('click', () => {
    if(input.value === ''){
        alert('No To-Do taks to display!')
    } else {
        let list = document.createElement('li');
        list.textContent = input.value;
        listContainer.append(list);
        let span = document.createElement('span');
        span.innerHTML ='\u00d7';
        list.append(span)
    }
    input.value = "";
    getData()
});


listContainer.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        getData()
    } else if(e.target.tagName ==='SPAN'){
        e.target.parentElement.remove();
        getData()
    }
});

function getData(){
    localStorage.setItem('data', listContainer.innerHTML)
};

function showData(){
    listContainer.innerHTML = localStorage.getItem('data')
};

showData()






