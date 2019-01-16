import React, { Component } from 'react';
import { RegularComponent, ThemedComponent } from 'components';

const styles = {
  backgroundColor: "#363a40",
  color: "#e1e3e5",
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <RegularComponent/>
        <ThemedComponent styles={styles}/>
      </div>
    );
  }
}

export default App;
