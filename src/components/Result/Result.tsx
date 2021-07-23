import React from "react";

export default function Result({ val }: { val: string }) {
    return (
        <tr>
            <td>
                <input
                    type="text"
                    name="input"
                    size={16}
                    id="answer"
                    value={val}
                    onChange={() => console.log("key entered")}
                />
                <br />
            </td>
        </tr>
    );
}
