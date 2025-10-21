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
        <li><a href="/events.html">Events</a></li>
        <li><a href="/join.html">Join Us</a></li>
        <li><a href="/resources.html">Resources</a></li>
        <li><a href="/archive.html">Archive</a></li>
        <li><a href="/rating.html">Rate Professors</a></li>
        <li><a href="/contact.html">Contact</a></li>
        <li>
          <a href="#">More</a>
          <ul class="dropdown">
            <li><a href="/codingCh.html">Coding Challenges</a></li>
            <li><a href="/careers.html">Careers</a></li>
            <li><a href="/members.html">Meet The Members</a></li>
            <li><a href="/board.html">Meet The Board</a></li>
          </ul>
        </li>
      </ul>
    </nav>
    `;
  }
}

customElements.define('primary-header', PrimaryHeader);