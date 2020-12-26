import {Component} from 'react';
import Button from 'react-bootstrap/Button';

export default class Planet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bgcolour: "grey",
            isFavourite: false,
            favouriteData: []
        };
    }

    onTrigger = () => {
        if(!this.props.isFavourite)
        {
            this.props.parentCallback(this.props.data[this.props.index]);
        }
    }


    handleOnclick = (e) => {
        this.setState({isFavourite: true});
        this.onTrigger();
    };

    render() {
        return (
            <Button className={"button"} style={{backgroundColor: this.state.bgcolour}} onClick={this.handleOnclick}>
                {this.props.name}
            </Button>
        );
    }
};