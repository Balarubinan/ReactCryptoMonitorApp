import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
// import staticFetch from './APIFecth';
// import fecthCoinData from './APIFecth'
import data from './sampledata.json'
import {BsFillArrowDownCircleFill,BsFillArrowUpCircleFill} from "react-icons/bs"
function ListComp(props){
    // let coinObjects=staticFetch()
    // console.log(data[0])
    let coins=data.slice(0,4)
    // const [coins, setCoins] = useState(coinObjects)
    let listTitle=props.title
    //  use the api to fecth the data here!!
    //  add a serach and subscribe page
    //  add best buy option
    return(
    <div className="col-md-6 col-xl-6">
        <div className="card shadow mb-4" style={{opacity: 1,filter: "blur(0px)",height: "380px",backgroundColor: "rgba(255,255,255,0)",color: "rgb(255,255,255)"}}>
            <div className="col">
                {listTitle}
            </div>
            {coins&&<h1>hheh</h1>&&coins.map((v,i,arr)=>{return(
            <div className="card-body" key={i}>
                <div className="row">
                    <div className="col-2">
                        <img src={v.logo_url}
                        height="50px" width="50px" alt="No logo"/>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <h4 className="small font-weight-bold" style={{"fontSize":"26px"}}>{v.name}</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h4 className="small font-weight-bold">{v.id}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col" style={{"fontSize":"27px"}}>
                                <h4 className="small font-weight-bold"><span className="float-right">${parseFloat(v.price).toFixed(2)}</span></h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                {parseFloat(v['1d'].price_change_pct)>0&&
                                <h4 className="small font-weight-bold" style={{color:"green"}}><BsFillArrowUpCircleFill color="green" size="20"/>  <span className="float-left">{parseFloat(v['1d'].price_change_pct).toFixed(2)+"%"}</span></h4>}
                                {parseFloat(v['1d'].price_change_pct)<0&&
                                <h4 className="small font-weight-bold" style={{color:"red"}}><BsFillArrowDownCircleFill color="red" size="20"/>  <span className="float-left">{parseFloat(v['1d'].price_change_pct).toFixed(2)+"%"}</span></h4>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>)})}
            <hr style={{color:"rgba(255,255,255,0.5)"}}/>
        </div>
    </div>
    )
}

export default ListComp;