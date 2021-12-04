import React from 'react'
import Profile from "../Components/Profile.js";

export default function Reps() {
    return (
        <div>
            <h1>Representatives</h1> <hr/>
            <Profile img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Official_photo_of_Speaker_Nancy_Pelosi_in_2019.jpg/330px-Official_photo_of_Speaker_Nancy_Pelosi_in_2019.jpg" name="Hon. Nancy Pelosi" age="81" party="Democratic Party"  position="Speaker of the United States House of Representatives" time="since 2013" salary="$193,400" networth="114.7 million" />

            <Profile img="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Vern_Buchanan_Official.jpg/220px-Vern_Buchanan_Official.jpg" name="Hon. Vern Buchanan" age="70" party="Republican Party"  position="Member of the U.S. House of Representatives from Florida" time="since 2007" salary="$174,000" networth="157.2 million" />
        </div>
    )
}
