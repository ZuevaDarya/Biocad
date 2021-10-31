var tbody_row = document.querySelectorAll('tbody tr');

for(let row of tbody_row){
    row.addEventListener('mouseover', function(){
        row.style.background = '#e9e9e9';
    });

    row.addEventListener('mouseout', function(){
        row.style.background = 'none';
    });
}