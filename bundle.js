var addrs = document.querySelector('.token-address')
addrs.addEventListener("click", copyAddrs);
function copyAddrs(){
    setTimeout(function(){
        navigator.clipboard.writeText(addrs.innerText);
        addrs.classList.add('token-copied')
        addrs.title="Address Copied"
    },100)

}
document.body.addEventListener("click", reset);
function reset(){
    if(addrs.classList.contains('token-copied')){
        addrs.classList.remove('token-copied')
        addrs.title="Copy Address"
    }
}