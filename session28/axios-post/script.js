const url = 'https://lesoublisdelinfo.com/api.php';

const axiosInstance = axios.create({
    headers: {
        'Content-Type': 'applicaiton/x-www-form-urlencoded'
    }
});

axiosInstance.post(url, new URLSearchParams({
    prenom: 'Steve'
}))
    .then(function(donnees) {
        console.log(donnees);
    })
    .catch(function(erreur) {
        console.log(erreur);
    })