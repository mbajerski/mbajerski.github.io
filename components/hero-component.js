class Hero extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
    <style>
        section.hero {
            max-width: 1792px;
            height: calc(100vh - 128px);
            background-color: var(--gray-100);
            margin: 64px auto;
            border-radius: 48px;}
        nav {
            display: flex;
            justify-content: flex-end;
            padding: 64px 80px;}
        ul {
            display: inline-flex;
            gap: 24px}
    </style>
    <section class="hero">
        <nav>
            <ul>
                <li><a class="body-l" href="#hello">Cześć</a></li>
                <li><a class="body-l" href="#about-me">O mnie</a></li>
                <li><a class="body-l" href="#portfolio">Portfolio</a></li>
                <li><a class="body-l" href="#contact">Kontakt</a></li>
            </ul>
        </nav>
    </section>
      `;
    }
  }
  
  customElements.define('hero-component', Hero);