function DetailList({details})
{
return(
  <div>
{details.map((detail)=>
(
  <div>
    <p>{detail.carnumber}</p>
    <p>{detail.drivername}</p>
    <p>{detail.checkin}</p>
    <p>{detail.checkout}</p>
  </div>
))}
  </div>
);
}

export default DetailList;