import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { AllTemplates } from '../../NewCard/NewCardForm/Template.jsx';
import { templates } from '../../NewCard/NewCardForm/CardCssTemplates.js'
import { FrontPreview, BackPreview } from '../../NewCard/NewCardForm/TemplatePreview.jsx';
import { getMyCard, editCardData, editCard, editCardCss } from '../../../actions/actions.js'

class EditCardForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            company_name: "",
            name: "",
            title: "",
            address: "",
            phone: "",
            email: "",
            previous: false,
            next: false,
            // toWallet: false
        }
    }

    componentDidMount = () => {
        console.log('EditCardForm componentDidMount this.state: ', this.state)
        console.log('EditCardForm componentDidMount this.props: ', this.props)
        if (!this.props.authInfo.user) {
            return
        } else {
            const { user } = this.props.authInfo;
            this.props.dispatch(getMyCard(user))
        }
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.authInfo.user !== prevProps.authInfo.user) {
            const { user } = this.props.authInfo;
            this.props.dispatch(getMyCard(user))
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
        console.log('EditCardForm handleChange state: ', this.state)
    }

    handleSubmit = (event) => {
        const { user } = this.props.authInfo;
        const body = {};
        body.data = { ...this.state };
        delete body.previous;
        delete body.next;
        // delete body.toWallet;
        for (var key in body.data) {
            if (body.data[key] === "") {
                body.data[key] = this.props.myCard.data[key]
            }
        }
        body.style = this.props.myCard.style
        console.log("body", body)
        console.log('EditCardForm handleSubmit state: ', this.state);
        this.props.dispatch(editCardData(user, body))
        this.setState({
            next: true
        })
    }

    chosenTemplate = (style) => {
        console.log('chosen template: ', style)
        this.props.dispatch(editCardCss(style))
    }

    putCard = (body) => {
        body.users = this.props.myCard.users;
        body.is_deleted = this.props.myCard.is_deleted;
        const { user } = this.props.authInfo
        if (Object.keys(body.style).length === 0) {
            body.style = this.props.myCard.style
        }
        let newCss = {};
        for (var key in body.style.css) {
            newCss[key] = JSON.stringify(body.style.css[key])
        }
        body.style.css = newCss;
        console.log("body at edit", body)
        this.props.dispatch(editCard(user, body));
        this.setState({
            toWallet: true
        })
    }

    // postCard = (body) => {
    //     body.users = [];
    //     body.is_deleted = false;
    //     let newStyle = {};
    //     for (var key in body.css) {
    //         newStyle[key] = JSON.stringify(body.css[key])
    //     }
    //     body.css = newStyle
    //     // this.props.dispatch(newCard(body))
    //     this.setState({
    //         toWallet: true
    //     })
    // }

    render() {
        console.log("EditCardForm this.props", this.props)

        if (this.state.toWallet === true) {
            return <Redirect to='/wallet' />
        }

        return (
            <div>
                {this.state.next === false ? (
                    <div className="edit-form-container">
                        <div className="edit-form" >
                            <div className="edit-field">
                                <input
                                    onChange={this.handleChange}
                                    type="text"
                                    name="company_name"
                                    defaultValue={this.props.myCard.data.company_name}
                                />
                            </div>
                            <div className="edit-field">
                                <input
                                    onChange={this.handleChange}
                                    type="text"
                                    name="name"
                                    defaultValue={this.props.myCard.data.name}
                                />
                            </div>
                            <div className="edit-field">
                                <input
                                    onChange={this.handleChange}
                                    type="text"
                                    name="title"
                                    defaultValue={this.props.myCard.data.title}
                                />
                            </div>
                            <div className="edit-field">
                                <input
                                    onChange={this.handleChange}
                                    type="text"
                                    name="address"
                                    defaultValue={this.props.myCard.data.address}
                                />
                            </div>
                            <div className="edit-field">
                                <input
                                    onChange={this.handleChange}
                                    type="text"
                                    name="phone"
                                    defaultValue={this.props.myCard.data.phone}
                                />
                            </div>
                            <div className="edit-field">
                                <input
                                    onChange={this.handleChange}
                                    type="text"
                                    name="email"
                                    defaultValue={this.props.myCard.data.email}
                                />
                            </div>
                            {/* <div className="previous">
                            <button>PREVIOUS</button>
                        </div> */}
                            <div className="next">
                                <button onClick={this.handleSubmit}> NEXT </button>
                            </div>
                        </div>
                    </div>
                ) : (
                        <div className="edit-design-form-container">
                            <div className="template-options-container">
                                <AllTemplates
                                    templates={templates}
                                    chosenTemplate={this.chosenTemplate}
                                />
                            </div>
                            <div className="card-preview-container">
                                <div className="back-view">
                                    <BackPreview
                                        style={this.props.editInfo.style.css}
                                        data={this.props.editInfo.data}
                                    />
                                </div>
                                <div
                                    className="front-view"
                                    style={this.props.editInfo.style.css}>
                                    <FrontPreview
                                        style={this.props.editInfo.style.css}
                                        data={this.props.editInfo.data}
                                    />
                                </div>
                            </div>
                            <div className="done">
                                <button onClick={() => { this.putCard(this.props.editInfo) }}> DONE </button>
                            </div>
                        </div>
                    )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("edit form state/store", state)
    return {
        authInfo: state.authInfo,
        myCard: state.myCard,
        editInfo: state.editInfo
    }
}

// export default EditCardForm;
export default connect(mapStateToProps)(EditCardForm);