class MyComponent extends HTMLElement {
	connectedCallback() {
	  this.innerHTML = `<a href="index.html">Home</a>
                        <a href="tablas.html">Tablas HTML</a>
                        <a href="parrafos.html">Párrafos</a>
                        <a href="formularios.html">Formularios</a>
                        <a href="videos-audios.html">Videos y Audios</a>
                        <a href="iframe.html">Iframe</a>
                        <a href="svg.html">SVG</a>`;
	}
  }
customElements.define('my-component-menu', MyComponent);