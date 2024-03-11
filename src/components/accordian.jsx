import { useState } from "react";
import data from "../data/data";
import '../css/accordian.css';

function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(itemID) {
        setSelected(itemID === selected ? null : itemID);
    }

    function handleMultiSelection(itemID) {
        let cpyMultiple = [...multiple];
        const findIndexOfItemID = cpyMultiple.indexOf(itemID);
        
        if (findIndexOfItemID === -1) {
            cpyMultiple.push(itemID);
        } else {
            cpyMultiple.splice(findIndexOfItemID, 1);
        }

        setMultiple(cpyMultiple);
    }

    return (
        <>
            <div className="wrapper">
                <button onClick={() => {
                    setEnableMultiSelection(!enableMultiSelection);
                }}>Enable Multi Activation</button>
                <div className="accordian">
                    {
                        data && data.length > 0 ?
                            data.map(dataItem => <div className="item">

                                <div onClick={
                                    enableMultiSelection
                                    ? () => handleMultiSelection(dataItem.id)
                                    : () => handleSingleSelection(dataItem.id)
                                    
                                } className="title">
                                    <h3>
                                        {dataItem.question}
                                    </h3>
                                    <span>+</span>
                                </div>
                                {
                                    selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ?
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
