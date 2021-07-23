import React, { useState } from "react";

import Result from "./components/Result/Result";

export default function App(): React.ReactElement {
    // const [result, setResult] = useState<string>("0");
    const [equation, setEquation] = useState<string>("");

    const collect = (e: any): void => {
        console.log(e.target.value);
        setEquation((prevVal) => `${prevVal}${e.target.value}`);
    };

    const calculate = (): void => {
        const answer: string = eval(equation);
        console.log(answer);

        setEquation(answer);
    };

    const clearEquation = (): void => {
        setEquation("");
    };

    return (
        <>
            <form name="calc">
                <table>
                    <Result val={equation} />
                    <tr>
                        <td>
                            <input
                                type="button"
                                name="one"
                                value="1"
                                onClick={(e) => collect(e)}
                            />
                            <input
                                type="button"
                                name="two"
                                value="2"
                                onClick={(e) => collect(e)}
                            />
                            <input
                                type="button"
                                name="three"
                                value="3"
                                onClick={(e) => collect(e)}
                            />
                            <input
                                type="button"
                                className="operator"
                                name="plus"
                                value="+"
                                onClick={(e) => collect(e)}
                            />
                            <br />
                            <input
                                type="button"
                                name="four"
                                value="4"
                                onClick={(e) => collect(e)}
                            />
                            <input
                                type="button"
                                name="five"
                                value="5"
                                onClick={(e) => collect(e)}
                            />
                            <input
                                type="button"
                                name="six"
                                value="6"
                                onClick={(e) => collect(e)}
                            />
                            <input
                                type="button"
                                className="operator"
                                name="minus"
                                value="-"
                                onClick={(e) => collect(e)}
                            />
                            <br />
                            <input
                                type="button"
                                name="seven"
                                value="7"
                                onClick={(e) => collect(e)}
                            />
                            <input
                                type="button"
                                name="eight"
                                value="8"
                                onClick={(e) => collect(e)}
                            />
                            <input
                                type="button"
                                name="nine"
                                value="9"
                                onClick={(e) => collect(e)}
                            />
                            <input
                                type="button"
                                className="operator"
                                name="times"
                                value="*"
                                onClick={(e) => collect(e)}
                            />
                            <br />
                            <input
                                type="button"
                                id="clear"
                                name="clear"
                                value=" C "
                                onClick={() => clearEquation()}
                            />
                            <input
                                type="button"
                                name="zero"
                                value="0"
                                onClick={(e) => collect(e)}
                            />
                            <input
                                type="button"
                                name="doit"
                                value=" = "
                                onClick={() => calculate()}
                            />
                            <input
                                type="button"
                                className="operator"
                                name="div"
                                value="/"
                                onClick={(e) => collect(e)}
                            />
                            <br />
                        </td>
                    </tr>
                </table>
            </form>
        </>
    );
}
