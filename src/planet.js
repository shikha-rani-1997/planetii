import {Component} from 'react';
import Planet from './eachplanet'
import Tabs from "./Tabs"; 

export default class Planets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFavourite: false,
            data: [],
            favouriteList: []
        };
    }

    handleOnClick = () => {
        this.setState({isFavourite: true});
    }

    componentDidUpdate() {
        if(this.state.data.length === 0)
        {
            this.props.data.map((val) =>
                this.state.data.push(val)
            )
        }
    }

    handleCallback = (childData) =>{
        let tempFavArray = [...this.state.favouriteList];
        tempFavArray.push(childData);
        let tempArray=[];
        if(this.state.data.length > 0)
        {
            tempArray = this.state.data;
        }
        else 
        {
            tempArray = this.props.data;
        }
        let filterArray = tempArray.filter(val => 
            val.name !== childData.name
        );
        this.setState({data: filterArray});
        this.setState({favouriteList: tempFavArray});
    }

    render() {
        if(!this.props.isLoading)
        {
            return (
                <div>
                    <Tabs>
                        <div label="Planets">  
                            {
                                this.state.data.map((val,key) =>
                                    <Planet key = {key} index = {key} data = {this.state.data} name={val.name} parentCallback = {this.handleCallback} />
                                )
                            }
                        </div>
                        <div label ="Favourite Planets">
                            {
                                this.state.favouriteList.map((val,key) =>
                                    <Planet key= {key} name= {val.name} isFavourite={true}/>
                                )
                            }
                        </div>
                    </Tabs>
                </div>
            );
        } else {
            return (
                <div>
                    {}
                </div>
            );
        }
        
    }
};