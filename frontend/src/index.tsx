import * as React from 'react';
import * as ReactDOM from 'react-dom';

const Greeting = () => {
    return (
        <>
            <GreetingText
            text="valde"
            repeats={10}
            />
            <GreetingText
            text="bamse"
            repeats={5}
            />
    </>
    )
};

type GreetingTextProps = {
    readonly text: string;
    readonly repeats: number;
};

const GreetingText: React.FC<GreetingTextProps> = (p: GreetingTextProps) => {
    const [isPressed, setIsPressed] = React.useState(false);

    const elems = [...Array(p.repeats).keys()].map(() => {
        return (
            <div>
                {p.text}
            </div>
        )
    }) 

    return (
        <div>
            {elems}
            <button onClick={(e) => { setIsPressed(true) }}/>
            {isPressed ? 'true' : 'false'}
        </div>
    )
}

ReactDOM.render(
    <Greeting/>,
    document.getElementById('root')
);
