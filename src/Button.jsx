function Button({text,onClick}){
    return (
        <>
        <p><strong>Q2. Create a Component named Button- "text" and "onClick". The component should
display a button element with the given text and call the onClick function when clicked</strong></p>
        <button onClick={onClick}>{text}</button>
        </>
    )
}
export default Button;