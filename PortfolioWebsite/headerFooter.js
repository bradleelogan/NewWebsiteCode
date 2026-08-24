const header = document.querySelector('#header');

window.addEventListener('load', function () {
    header.innerHTML = `
        <h1>Bradlee Logan</h1>
        <section>
            <p>Cinematographer | Editor | Game Designer <!--| Drone Pilot--></p>
            <nav>
                <!--Once I have more work, this will be enabled
                <a href="./pages/work.html">Work</a>
                -->
                <a href="./pages/projects.html">Projects</a>
                <a href="./pages/about.html">About Me</a>
                <a href="./pages/contact.html">Contact</a>
            </nav>
        </section>
    `;
});