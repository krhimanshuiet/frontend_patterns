function withStyle(Component){
    return ({style,...props}) => {
        const defaultStyle={
            fontSize:"100px",
            backgroundColor:"yellow",
            color:"red",
            ...style
        }
        return (
             <Component  style={defaultStyle} {...props}/>
        )
    }
}
const Text = ({style}) => <p style={style}>Hello world</p>
const Button = (props) => <button style={props.style}>click me</button>;
export const StyledText = withStyle(Text);
export const StyledButton = withStyle(Button);

