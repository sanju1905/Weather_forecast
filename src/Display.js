const Display=({days,hours,minute,seconds}) =>
{
    return(
        
        <div className="card">
            <h1 className="card-title">Time Count Down:</h1><hr/>
            <h2>Offer Ends in:</h2><hr/>
            <center>
            <table>
                <tbody>
                    <tr>
                        <th style={{backgroundColor:"black", color:"white",textAlign:"center",fontSize:"50px"}}>{days}</th>&nbsp;&nbsp;
                        <th style={{backgroundColor:"black", color:"white",textAlign:"center",fontSize:"50px"}}>{hours}</th>&nbsp;&nbsp;
                        <th style={{backgroundColor:"black", color:"white",textAlign:"center",fontSize:"50px"}}>{minute}</th>&nbsp;&nbsp;
                        <th style={{backgroundColor:"black", color:"white",textAlign:"center",fontSize:"50px"}}>{seconds}</th>&nbsp;&nbsp;
                    </tr>
                    <tr>
                        <td >DAYS</td>&nbsp;&nbsp;
                        <td>HOURS</td>&nbsp;&nbsp;
                        <td>MINUTES</td>&nbsp;&nbsp;
                        <td>SECONDS</td>&nbsp;&nbsp;
                    </tr>
                </tbody>
            </table>
            </center>
        </div>
    );
}
export default Display;