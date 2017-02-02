import React from 'react';
class App extends React.Component {
  render() {
     return (
         <div>
            <Header/>
            <Body/>
            <Footer/>
         </div>
        );
}
}
        const Header =()=> <p><img src = "./images/logo1.jpg"/></p>
        const Body =()=> <p>i am body text</p>
        const Footer =()=> <p>This is Footer Section</p>

export default App;