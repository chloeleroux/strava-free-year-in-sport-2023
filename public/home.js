let url = new URL(location.href);
if(url.searchParams.has('access')){
    fetch(`/stats?access=${url.searchParams.get('access')}`, {
        method: 'GET'
    }).then(response => {
        if(response.status === 200){
            response.json().then(res => {
                localStorage.setItem('recap', JSON.stringify(res));    
                document.querySelector('.pseudo').innerHTML = res.athlete.firstname + ' ' + res.athlete.lastname
                document.querySelector('#profil-picture').setAttribute('src', res.athlete.image);
            });
        } else {
            window.location = 'login.html';
        }
    })
} else {
    window.location = 'login.html';
}

document.querySelector('#send').addEventListener('click', () => {
    navigator.clipboard.writeText(window.location).then(window.alert('Lien collé dans le presse papier !'));
})

document.querySelector('#btn').addEventListener('click', () => {
    window.location = '/days.html'
})