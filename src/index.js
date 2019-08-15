import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <MiComponente />
      </div>
    );
  }
}
class MiComponente extends React.Component {
  render() {
    return (
      <div id="miclase">
        <h1>Mi Componente</h1>
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Encabezado</h1>
      </div>
    );
  }
}
class Content extends React.Component {
  render() {
    return (
      <div>
        <h2>Contenido</h2>
        <p>Texto</p>
      </div>
    );
  }
}
export default App;
