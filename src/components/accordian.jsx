import { useState } from "react";
import data from "../data/data";

function Accordian() {
    const [selected, setSelected] = useState(null);

    function handleSingleSelection(itemID) {
        setSelected(itemID === selected ? null : itemID);
    }
    console.log(selected);

    return (
        <>
            <div className="wrapper">
                <div className="accordian">
                    {
                        data && data.length > 0 ?
                            data.map(dataItem => <div className="item">

                                <div onClick={() => {
                                    handleSingleSelection(dataItem.id)
                                }} className="title">
                                    <h3>
                                        {dataItem.question}
                                    </h3>
                                    <span>+</span>
                                </div>
                                {
                                    selected === dataItem.id ?
                                        <div className="content">
                                        {dataItem.answer}
                                    </div>
                                    : null
                                }
                            </div>
                            ) : (<div>No Data Present</div>)
                    }
                </div>
            </div>
        </>
    )
}

export default Accordian;
