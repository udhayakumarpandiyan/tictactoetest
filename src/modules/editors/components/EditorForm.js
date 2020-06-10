import React, { useState } from 'react';
import '../styles/index.scss';
const districts = ["Cuddalore",
    "Villupuram", "Ariyalur",
    "Thiruvannamalai", "Kancheepuram",
    "Salem", "Dharmapuri", "Vellore",
    "Krishnagiri", "Thiruvallur", "Chennai",
    "Nagapattinam", "Thanjaavur"];
const constituencies = ["Cuddalore", "Panruti", "Neyveli",
    "Kurinjipadi", "Chidhambaram", "Buvanagiri",
    "Kaatumannarkovil", "Virudhachalam", "Thittakudi"];

const EditorForm = (props) => {
    let lang = props.lang ? props.lang.editor : {};
    return (<div className="editor_container">
        <div className="editor_form">
            <div>
                {lang && lang.district} :
                <select>
                    {districts.map((district, i) => {
                        return <option key={i}>{district}</option>
                    })

                    }
                </select>
            </div>
            <div>
                {lang && lang.constituency} :
                <select>
                    {constituencies.map((constituency, i) => {
                        return <option key={i + constituency}>{constituency}</option>
                    })

                    }
                </select>
            </div>
            <div>
                {lang && lang.boothNumber} :
                <input type="number" />
            </div>
            <div>
                {lang && lang.boothName} :
                <input type="text" />
            </div>

            <div>
                {lang && lang.maleVoters} :
                <input type="number" />
            </div>
            <div>
                {lang && lang.femaleVoters} :
                <input type="number" />
            </div>
            <div>
                {lang && lang.thirdGender}  :
                <input type="number" value={0} />
            </div>
            <div>
                {lang && lang.totalVoters} :
                <input type="number" />
            </div>

            <button onClick={props.onLoginClick}>{lang && lang.submit}</button>
        </div>

    </div>)
}
export default EditorForm;
