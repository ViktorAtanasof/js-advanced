function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button'))
        .forEach(button => button.addEventListener('click', onClick));

    function onClick(ev) {
        const profile = ev.target.parentElement;
        const isActive = profile.querySelector('input[value="unlock"]').checked;
        if (isActive) {
            let info = Array.from(profile.querySelectorAll('div'))
                .find(p => p.id.includes('HiddenFields'));

            if (ev.target.textContent == 'Show more') {
                ev.target.textContent = 'Hide it';
                info.style.display = 'block';
            } else {
                ev.target.textContent = 'Show more';
                info.style.display = 'none';
            }
        }
    }
}
