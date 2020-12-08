const loggedINstate = document.querySelectorAll('.logged-in');
const loggedOUTstate = document.querySelectorAll('.logged-out');

const changeState = (user) => {
    if (user) {
        // Being logged in state
        loggedINstate.forEach(item => item.style.display = 'block')
        loggedOUTstate.forEach(item => item.style.display = 'none')
    } else {
        // Being in logged out state
        loggedINstate.forEach(item => item.style.display = 'none')
        loggedOUTstate.forEach(item => item.style.display = 'block')
    }
}

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

});