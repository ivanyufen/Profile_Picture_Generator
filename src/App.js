import React from 'react';

class App extends React.Component {
    state = { tempInput: "", inputUser: "", randomNo: "" }

    getprofPict = () => {
        //generate random number from 1 to 4
        var random = Math.floor(Math.random() * (+5 - +1)) + +1;
        this.setState({
            randomNo: random, inputUser: this.state.tempInput
        })
    }

    display() {
        return (
            <img className="rounded-circle bg-white my-3" src={`https://robohash.org/${this.state.inputUser}.png?set=set${this.state.randomNo}`} />
        )
    }
    render() {
        return (
            <React.Fragment>
                <div className="container text-center p-5">
                    <input type="text" className="form-control w-25 mx-auto my-3" placeholder="Ketik nama Anda..." onChange={(e) => { this.setState({ tempInput: e.target.value }) }}></input>
                    <button type="button" className="btn btn-success" onClick={this.getprofPict}>Buat Profile Picture!</button>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            {/* untuk validate inputUser ada isinya atau engga, kalau ada baru ditampilin */}
                            {this.state.inputUser && this.display()}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default App;