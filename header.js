class PrimaryHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
     <header>
        <h1>Welcome to ACM</h1>
        <p>The Association for Computing Machinery - Empowering Students in Tech</p>
    </header>

     <!-- Navigation Bar -->
     <nav>
      <ul>
        <li><a href="/index.html">Home</a></li>
        <li><a href="/Pages/events.html">Events</a></li>
        <li><a href="/Pages/join.html">Join Us</a></li>
        <li><a href="/Pages/resources.html">Resources</a></li>
        <li><a href="/Pages/archive.html">Archive</a></li>
        <li><a href="/Pages/rating.html">Rate Professors</a></li>
        <li><a href="/Pages/contact.html">Contact</a></li>
        <li>
          <a href="#">More</a>
          <ul class="dropdown">
            <li><a href="/Pages/codingCh.html">Coding Challenges</a></li>
            <li><a href="/Pages/careers.html">Careers</a></li>
            <li><a href="/Pages/members.html">Meet The Members</a></li>
            <li><a href="/Pages/board.html">Meet The Board</a></li>
          </ul>
        </li>
      </ul>
    </nav>
    `;
  }
}

customElements.define('primary-header', PrimaryHeader);
