import React from 'react';

const App = React.createClass({

  constructor(){
     super();
     this.state = {
        events : ["sample"];
      }
  }

      componentWillMount() {
          const events = this.state.events;
          events.push("Mounting component");
      },

      componentDidMount() {
          const events = this.state.events;
          events.push("Component mounted");
          this.setState({events});
      },

      render() {
          const eventNodes = this.state.events.map(event => <li>{event}</li>);
          return (
              <ul>
              {eventNodes}
              </ul>
          );
      }
  });


export default App;
