function Button (props) {
    /**Quando ha apenas uma linha, da pra usar o return sem parentesis */
    return <button onClick={props.event}>{props.text}</button>
}

export default Button