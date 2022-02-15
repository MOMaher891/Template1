document.querySelector('.fa-magnifying-glass').addEventListener('click', () => {
    document.querySelector('.form-control').style.display = "block";
})


document.querySelector('.i-1').addEventListener('click', () => {
    document.querySelector('.badge1').style.display = 'none';
})
document.querySelector('.i-2').addEventListener('click', () => {
    document.querySelector('.badge2').style.display = 'none';
})



document.querySelector('.home').addEventListener('click', timedRefresh)

function timedRefresh(timeoutPeriod) {
    setTimeout("location.reload(true);", timeoutPeriod);
}

document.querySelector('.button').addEventListener('click', timedRefresh)
