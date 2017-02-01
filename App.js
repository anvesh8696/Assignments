import React from 'react';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            homeLink: "Home",
            apiCall: {},
            movies: [],
            vehicles: [],
            starships:[]
        };
    }
    componentWillMount(){
        let moviesList = [];
        let vehiclesLen = [];
        let starshipsList=[];
        fetch('http://swapi.co/api/people/1/')
            .then(res=> res.json())
            //.then(res=>{return res.json()})
            .then(data => {
                console.log(data);
                this.setState({
                    apiCall: data
                });
                let x = 0;
                let len = this.state.apiCall.films.length;
                for(x=0;x<len;x++){
                    fetch(this.state.apiCall.films[x])
                        .then(res=>res.json())
                        .then(data=>{
                            moviesList.push(data)
                            this.setState({
                                movies: moviesList
                            })
                        })
                }
                let vehlen = this.state.apiCall.vehicles.length;
                for(x=0;x<vehlen;x++){
                    fetch(this.state.apiCall.vehicles[x])
                        .then(res=>res.json())
                        .then(data=>{
                            vehiclesLen.push(data)
                            this.setState({
                                vehicles: vehiclesLen
                            })
                        })
                }

                let starlen= this.state.apiCall.starships.length;
                for(x=0;x<starlen;x++){
                    fetch(this.state.apiCall.starships[x])
                        .then(res=>res.json())
                        .then(data=>{
                            starshipsList.push(data)
                            this.setState({
                                starships: starshipsList
                            })
                        })
                }
            })
    }


    render(){
        return(
            <div>
                <h3>Test Application</h3>
                <ul>
                    <li>Name:{this.state.apiCall.name}</li>
                    <li>Height:{this.state.apiCall.height}</li>
                    <li>Mass:{this.state.apiCall.mass}</li>
                    <li>Geneder:{this.state.apiCall.gender}</li>
                </ul>

                Movies
                <table>
                    <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Movie Name</th>
                        <th>Episode ID</th>
                        <th>Director</th>
                        <th>Producer</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.movies.map((movie,index)=>{
                        return <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{movie.title}</td>
                            <td>{movie.episode_id}</td>
                            <td>{movie.director}</td>
                            <td>{movie.producer}</td>
                        </tr>
                    })}
                    </tbody>
                </table><br/>
                Vehicles:
                <table>
                    <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Model</th>
                        <th>Manufacturer</th>
                        <th>passengers</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.vehicles.map((vehicle,index)=>{
                        return <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{vehicle.name}</td>
                            <td>{vehicle.model}</td>
                            <td>{vehicle.manufacturer}</td>
                            <td>{vehicle.passengers}</td>
                        </tr>
                    })}
                    </tbody>
                </table><br/>
                Starships:
                <table>
                    <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Model</th>
                        <th>Manufacturer</th>
                        <th>passengers</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.starships.map((starship,index)=>{
                        return <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{starship.name}</td>
                            <td>{starship.model}</td>
                            <td>{starship.manufacturer}</td>
                            <td>{starship.passengers}</td>
                        </tr>
                    })}
                    </tbody>
                </table>


            </div>
        )
    }
}

export default App;