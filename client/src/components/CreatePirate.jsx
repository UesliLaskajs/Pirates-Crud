import  { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePirate = () => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [treasure_chests, setTreasure_chests] = useState(0);
    const [phrase, setPhrase] = useState("");
    const [positions, setPositions] = useState("boatswain");
    const [leg, setLeg] = useState(true);
    const [eye, setEye] = useState(true);
    const [hand, setHand] = useState(true);

    const [existingcaptain, setExistingCaptain] = useState(false);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:3000/pirates")
            .then((res) => {
                const users = res.data;
                const hasCaptain = users.some((user) => user.positions === "captain");
                setExistingCaptain(hasCaptain);
            })
            .catch((err) => {
                console.error("Error getting data", err);
            });
    }, []);

    const eventHandler = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3000/pirate/new", {
                name,
                image,
                treasure_chests,
                phrase,
                positions,
                leg,
                eye,
                hand,
            })
            .then(() => {
                navigate("/pirates");
            })
            .catch((err) => {
                if (err.response && err.response.data && err.response.data.errors) {
                    setErrors(err.response.data.errors);
                } else {
                    console.error("Error adding pirate", err);
                }
            });
    };

    return (
        <>
            <div className="header">
                <div className="hero_buttons">
                    <h1>Add Pirates</h1>
                    <button onClick={() => navigate("/pirates")}>Crew Board</button>
                </div>
            </div>

            <div className="section_conatiner">
                <form onSubmit={eventHandler}>
                    <div className="left_container">
                        <div className="inputs_container">
                            <label htmlFor="name">Pirate Name:</label>
                            <input
                                type="text"
                                value={name}
                                placeholder="Enter Name"
                                onChange={(e) => setName(e.target.value)}
                            />
                            {errors.name && <p>{errors.name.message}</p>}
                        </div>

                        <div className="inputs_container">
                            <label htmlFor="image">Image Url:</label>
                            <input
                                type="text"
                                value={image}
                                placeholder="Enter Image"
                                onChange={(e) => setImage(e.target.value)}
                            />
                            {errors.image && <p>{errors.image.message}</p>}
                        </div>

                        <div className="inputs_container">
                            <div className="number_input">
                                <label htmlFor="numbers"># of Treasure Chests:</label>
                                <input
                                    type="number"
                                    value={treasure_chests}
                                    onChange={(e) => setTreasure_chests(e.target.value)}
                                />
                                {errors.treasure_chests && <p>{errors.treasure_chests.message}</p>}
                            </div>
                        </div>

                        <div className="inputs_container piratesphrase">
                            <label htmlFor="phrase"> Pirate Catch Phrase</label>
                            <input
                                type="text"
                                value={phrase}
                                placeholder="Enter Phrase"
                                onChange={(e) => setPhrase(e.target.value)}
                            />
                            {errors.phrase && <p>{errors.phrase.message}</p>}
                        </div>
                    </div>

                    <div className="right_container">
                        <div className="select_input_first">
                            <label htmlFor="positions">Positions</label>
                            <select value={positions} onChange={(e) => setPositions(e.target.value)}>
                                <option value="boatswain">boatswain</option>
                                <option value="first mate">first mate</option>
                                <option value="quarter master">quarter master</option>
                                <option value="powder monkey">powder monkey</option>
                                {!existingcaptain && <option value="captain">captain</option>}
                            </select>
                        </div>
                        <div className="selects">
                            <div className="select_input">
                                <label htmlFor="peg">Peg Leg</label>
                                <input type="checkbox" checked={leg} onChange={() => setLeg(!leg)} />
                            </div>

                            <div className="select_input">
                                <label htmlFor="eye">Eye Patch</label>
                                <input type="checkbox" checked={eye} onChange={() => setEye(!eye)} />
                            </div>

                            <div className="select_input">
                                <label htmlFor="hand">Hook Hand</label>
                                <input type="checkbox" checked={hand} onChange={() => setHand(!hand)} />
                            </div>
                        </div>
                        <button>Add Pirate</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default CreatePirate;
