import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";



const UserById = () => {
    const [user, setUser] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        axios
            .get(`http://localhost:3000/pirate/${id}`)
            .then((res) => {
                setUser(res.data);
            })
            .catch((err) => {
                console.log("Error getting user data", err);
            });
    }, [id]);

    return (
        <>
            <div className="header">
                <div className="hero_buttons">
                    <h1> {user.name}</h1>

                </div>
            </div>
            <div className="section_conatiner_list">
                <div className="flexer">
                    <div className="left">
                        <div className="image_cont">
                            <img src={user.image} alt="" />
                        </div>
                        <div className="hero_text">
                            <h1>{`"${user.phrase}"`}</h1>
                        </div>
                    </div>

                    <div className="right">
                        <div className="main_text">
                            <div className="hero">
                                <h1>About</h1>
                            </div>


                            <div className="items">
                                <h3 className="green" >Positions:   {user.positions}</h3 >
                                <h3 className="green" >Treasurie:   {user.treasure_chests}</h3 >
                                <h3 className="blue" >Peg Leg:      {user.leg === true ? "True" : 'False'}</h3 >
                                <h3 className="blue" >Eye Patch:    {user.eye === true ? "True" : 'False'}</h3 >
                                <h3 >Hook Hand:{user.hand === true ? "True" : 'False'}</h3 >
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default UserById;