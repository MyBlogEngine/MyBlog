import * as React from "react"


interface ButtonProps {
    onClick(): void;
    label: string;
}
export const Button: React.SFC<ButtonProps> = (props) => (<div className="input-group-append" onClick={(_e) => props.onClick()}>
    <button className="btn btn-outline-secondary" type="button" id="button-addon2">{props.label}</button>
</div>)