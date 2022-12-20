import "./style.css";

const Buttons = (props) => (
    <div className="section__taskButtons">
        <button className={`section__taskButtons--button ${props.tasks.length === 0 ? "hidden" : ""}`}>
            {props.sorted === false ? "Sortuj od najstarszych" : "Sortuj od najnowszych"}
        </button>

        <button className={`section__taskButtons--button ${props.tasks.length === 0 ? "hidden" : ""}`}>
            {props.hideDone === true ? "Pokaż ukończone" : "Ukryj ukończone"}
        </button >

        <button className={`section__taskButtons--button ${props.tasks.length === 0 ? "hidden" : ""}`}
        disabled={props.tasks.every(({ done }) => done)}>
            Ukończ wszystkie
        </button >
    </div>
);

export default Buttons;