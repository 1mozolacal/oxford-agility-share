//TODO make fetched for published content
export default  function handler(req, res) {
    if (req.headers.refname === undefined ){
        return res.status(404).json({message:"Could not find referecne name or api key"})
        
    } 

    fetch('https://api.aglty.io/redacted/preview/en-us/list/' + req.headers.refname,{
        headers: new Headers({
            'APIKey': 'REDACTED',
            })
    })
    .then(resMid => resMid.json())
    .then((data) => {
        const cleanedData = data.items.map( (ele,index) =>{
            return ele.fields
        })
        res.status(200).json({data:cleanedData})//sends second one
    })
    .catch(err => {
        console.log("API throw error:\n" + err);
        res.status(500).json({message:"API thrown error"})
    })
}