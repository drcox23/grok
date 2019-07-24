import React, {Component} from 'react';
import './DesignForm.css';
import {connect} from 'react-redux';

import {Template} from '../InfoForm/Template.jsx';
import {template1} from '../InfoForm/CardCssTemplates.js';
import {FrontPreview, BackPreview} from '../InfoForm/TemplatePreview.jsx';
// import {cardContainer, front, title, back, info, name, address, phone, email} from '../../../CardComponent/CardClassing.js';

import {newCardCss} from '../../../actions/actions.js';

// import {Card} from '../../../CardComponent/CardComponent.jsx'

class DesignForm extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    chosenTemplate = (style) => {
        console.log('chosen template: ', style)
        this.props.dispatch(newCardCss(style))
    }

    render() {
        console.log("design form props", this.props)
        return (
            <div className="design-form-container">
                <div className="template-options-container">
                    <Template 
                        style={template1}
                        chosenTemplate={this.chosenTemplate}
                    />
                </div>
                <div className="card-preview-container">
                    <div className="front-view">
                        <FrontPreview 
                            // style={this.props.addInfo.css}
                        />
                    </div>
                    <div className="back-view">
                        <BackPreview 
                            // style={this.props.addInfo.css}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    // console.log("design form add Info", addInfo);
    console.log("design form state/store", state)
    return {
        addInfo: state.addInfo
    }
}

export default connect(mapStateToProps)(DesignForm);