import React from 'react';
// import {template1} from './CardCssTemplates.js';

export const Template = (props) => {
    console.log('template props', props)
    return (
        <div className="template" style={props.style.back} onClick={() => {props.chosenTemplate(props.style)}}>
            
        </div>
    )
}

export const AllTemplates = (props) => {
    return props.templates.map(template => 
        <div key={template.template} className="template" style={template.css.back} onClick={() => {props.chosenTemplate(template)}}>
            
        </div>
    )
}
