import React from "react";
import Character from "../../beans/character";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class OpenCreationFlow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numOfAdults: 0,
            numOfKids: 1,
            adults: [],
            kids: [],
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        //condition to check if it's adult character name
        if (target.classList.contains('character-name')) {

            // if adult character get index and name of the adult and save it to the adults array
            let charorder = target.getAttribute('charorder');
            let tmpArray = target.getAttribute('isadult') === 'true' ? this.state.adults : this.state.kids;
            let tmpCharacter = new Character(value, charorder);
            tmpArray[charorder] = tmpCharacter;
            if (target.getAttribute('isadult') === 'true') {
                this.setState({
                    adults: tmpArray
                })
            }
            else if (target.getAttribute('isadult') === 'false') {
                this.setState({
                    kids: tmpArray
                })
            }
            else {
                console.error("invalid character type");
            }

        }
        // fallback condition to regular input fields
        else {
            this.setState({
                [name]: value
            });
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Library</li>
                            </ol>
                        </nav>
                        <Router>
                            <Switch>

                                <Route path="/create-a-book/gifter-details">
                                    <p>gifter details view</p>
                                </Route>

                                <Route path="/create-a-book">
                                    <div>
                                        <div className='row'>
                                            <div className="col">
                                                <label>Is this book a gift?</label>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="isGift" value="yes" checked onChange={this.handleInputChange} />
                                                    <label className="form-check-label" htmlFor="exampleRadios1">yes</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="exampleRadios" value="no" onChange={this.handleInputChange} />
                                                    <label className="form-check-label" htmlFor="exampleRadios2">no</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            {/* START: get number of adults and kids in the story */}
                                            <div className="col">
                                                <div className="form-group">
                                                    <label htmlFor="exampleFormControlSelect1">Number of Adults in your story</label>
                                                    <select className="form-control" name="numOfAdults" value={this.state.numOfAdults} onChange={this.handleInputChange}>
                                                        <option>0</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group">
                                                    <label htmlFor="exampleFormControlSelect2">Number of Kids in your story</label>
                                                    <select className="form-control" name="numOfKids" value={this.state.numOfKids} onChange={this.handleInputChange}>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>


                                        {/* START: Column for Input fields for adults names */}
                                        <div className="row">
                                            <div className="col">
                                                {
                                                    this.state.numOfAdults > 0 ? <div className="form-group">
                                                        <label htmlFor="exampleFormControlInput1">Name of the adults</label>
                                                        <input
                                                            type="text"
                                                            className="form-control character-name"
                                                            charorder={0}
                                                            isadult="true"
                                                            placeholder={this.state.numOfAdults > 1 ? 'First Adult Name' : 'Enter Name'}
                                                            onChange={this.handleInputChange}
                                                        />
                                                    </div> : null
                                                }
                                                {
                                                    this.state.numOfAdults > 1 ? <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control character-name"
                                                            charorder={1}
                                                            isadult="true"
                                                            placeholder='Second Adult Name'
                                                            onChange={this.handleInputChange}
                                                        />
                                                    </div> : null
                                                }
                                            </div>

                                            {/* START: Column for Input fields for kids names */}
                                            <div className="col">
                                                <div className="form-group">
                                                    <label htmlFor="exampleFormControlInput1">Name of the Kids</label>
                                                    <input
                                                        type="text"
                                                        className="form-control character-name"
                                                        charorder={0}
                                                        isadult="false"
                                                        placeholder={this.state.numOfKids > 1 ? 'First Kid\'s Name' : 'Enter the kid\'s Name'}
                                                        onChange={this.handleInputChange}
                                                    />
                                                </div>
                                                {
                                                    this.state.numOfKids > 1 ?
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control character-name"
                                                                charorder={1}
                                                                isadult="false"
                                                                placeholder={'Enter the second kid\'s Name'}
                                                                onChange={this.handleInputChange}
                                                            />
                                                        </div> : null
                                                }
                                                {
                                                    this.state.numOfKids > 2 ?
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control character-name"
                                                                charorder={2}
                                                                isadult="false"
                                                                placeholder={'Enter the third kid\'s Name'}
                                                                onChange={this.handleInputChange}
                                                            />
                                                        </div> : null
                                                }
                                            </div>
                                        </div>
                                        <hr />


                                        {/* section to get information of who is the gifter and who is the receiver */}
                                        <div>
                                            <div className="form-group">
                                                <label htmlFor="exampleFormControlSelect1">Who is the gifter</label>
                                                <select className="form-control">
                                                    {
                                                        this.state.adults.map((charIn, index) => {

                                                        })
                                                    }

                                                    {this.state.adults.map((adultIn,index) =>
                                                        <option key={index}>{adultIn.name}</option>
                                                    )}
                                                </select>
                                            </div>
                                        </div>
                                        <Link className="btn btn-primary" to="/create-a-book/gifter-details"> Next</Link>
                                    </div>
                                </Route>

                            </Switch>
                        </Router>
                        <div>
                            Testing:<br />
                            {JSON.stringify(this.state)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default OpenCreationFlow;