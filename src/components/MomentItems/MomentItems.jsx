export const MomentItems = ({i,ind}) =>{
    console.log(i)
    console.log(ind)
    return(
        <>
        <div >
            <img style={{height:"200px", width:"200px" }} src={i} alt="" />
            {/* <p>{ind}</p> */}
        </div>
        </>
    )
}