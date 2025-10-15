import iconsSrc from "../../assets/img/sprite.svg"

type IconPropsType = {
    iconID:string
    width?:string
    height?:string
    viewBox?:string
}
export const Icon = (props:IconPropsType) => {
    return (
        <svg width={props.width ||"100"} height={props.height ||"100"} viewBox={props.viewBox ||"0 0 100 100"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSrc}#${props.iconID}`}></use>
        </svg>
    );
};