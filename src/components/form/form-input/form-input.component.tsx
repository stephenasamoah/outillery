import React, { ChangeEventHandler } from 'react';
import './form-input.styles.scss';

interface Item {
    label: string;
    value: any;
    handleChange: ChangeEventHandler;

    [key: string]: any
}

type Props = Item;

const FormInputComponent: React.FC<Props> = ({ label, value, handleChange, ...props }: Props) => (
    <div className="group">
        <input className="form-input" onChange={ handleChange } { ...props }/>
        {
            label ? (
                <label className={ `${ value.length ? 'shrink' : '' } form-input-label` }>{ label }</label>
            ) : null
        }
    </div>
);

export default FormInputComponent;
