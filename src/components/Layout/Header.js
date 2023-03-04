class HeaderLayout extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
      <style>
        header {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 10px;
          position: sticky;
          top: 0;
          padding: 10px 0;
          background-color: var(--text);
          color: var(--secondary);
          width: 100%;
          z-index: 1;
        }

        header .app-bar__menu {
          display: flex;
          align-items: center;
        }

        header .app-bar__menu button {
          background-color: transparent;
          border: none;
          font-size: 24px;
          padding: 8px 12px;
          cursor: pointer;
        }

        header .app-bar__brand {
          display: flex;
          align-items: center;
        }

        header .app-bar__brand a{
          text-decoration: none;
        }

        header .app-bar__brand h1 {
          text-transform: uppercase;
          font-size: 22px;
          user-select: none;
        }

        header .app-bar__navigation {
          position: absolute;
          top: 50px;
          left: -190px;
          width: 150px;
          transition: all 0.3s;
          padding: 8px 16px;
          background-color: white;
          overflow: hidden;
        }

        header .app-bar__navigation.open {
          left: 0;
        }

        header .app-bar__navigation ul li a {
          color: var(--text);
          display: inline-block;
          text-decoration: none;
          padding: 14px 0;
          margin-bottom: 5px;
          width: 100%;
        }

        @media screen and (min-width: 650px) {
          header{
            grid-template-columns: 1fr auto;
            padding: 8px 32px;
          }
        
          header .app-bar__brand h1 {
            font-size: 1.5em;
          }
        
          header .app-bar__menu {
            display: none;
          }
        
          header .app-bar__navigation {
            position: static;
            width: 100%;
            background-color: transparent;
            margin: 0 32px;
          }
        
          header .app-bar__navigation ul li {
            display: inline-block;
          }
        
          header .app-bar__navigation ul li a {
            display: inline-block;
            color: var(--secondary);
            width: 120px;
            text-align: center;
            margin: 0;
          }
        }

        @media screen and (min-width: 800px) {
          header .app-bar__brand h1 {
            font-size: 2em;
          }
        }

        .skip-link {
          position: absolute;
          margin-top: 10px;
          margin-left: 7px;
          padding: 7px 8px 7px 8px;
          background-color: #fff;
          border: 1px solid #555;
          border-radius: 3px;
          text-decoration: none;
          color: var(--text-dark);
        }

        .skip-link:focus {
          top: 0;
          z-index: 100;
          display: block;
        }
      </style>

      <button id="skiplink" tabindex="0" class="skip-link">Menuju ke konten</button>
      <header>
        <div class="app-bar__menu">
            <button id="drawer-button">☰</button>
        </div>
        <div class="app-bar__brand">
          <h1>The Restos</h1>
        </div>
        <nav id="drawer" class="app-bar__navigation">
            <ul>
                <li><a href="#/">Home</a></li>
                <li><a href="#/favourites">Favorite</a></li>
                <li><a href="https://www.linkedin.com/in/aslampangestu03">About Us</a></li>
            </ul>
        </nav>
      </header>
      `
  }
}

customElements.define('layout-header', HeaderLayout)
