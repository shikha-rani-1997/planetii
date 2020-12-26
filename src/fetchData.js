import {Component} from 'react';
import Planets from './planet';


export class Fetch extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            isLoading: true
        };
    }

    async componentDidMount() {
        const url = "https://assignment-machstatz.herokuapp.com/planet";
        const response = await fetch(url);
        const planetData = await response.json();
        this.setState({data: planetData});
        if(this.state.data.length > 0)
        {
            this.setState({isLoading: false});
        }
    };

    render() {
        return (
            <div>
                <Planets data = {this.state.data} isLoading = {this.state.isLoading} />
            </div>
        );
    }
};