class LoadingLayout extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
        <style>
            .loading {
                background: radial-gradient(rgba(20, 20, 20,.8), rgba(0, 0, 0, .8));
                background: -webkit-radial-gradient(rgba(20, 20, 20,.8), rgba(0, 0, 0,.8));
                z-index: 999;
                width: 100vw;
                height: 100vh;
                bottom: 0;
                top: 0;
                left: 0;
                position: fixed;
            }

            .center {
                position: absolute;
                top: 50%;
                left: 50%;
                margin-top: -25px;
                margin-left: -50px;
            }

            .loader {
                width: 80px;
                height: 80px;
                border: 10px solid #FFF;
                border-bottom-color: var(--primary);
                border-radius: 50%;
                display: inline-block;
                box-sizing: border-box;
                animation: rotation 1s linear infinite;
                }
            
                @keyframes rotation {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(360deg);
                }
            } 
        </style>

        <div class="loading">
            <div class="center">
                <span class="loader"></span>
            </div>
        </div>
    `
  }
}

customElements.define('layout-loading', LoadingLayout)
