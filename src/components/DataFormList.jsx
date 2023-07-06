


import Card from './Card'

const DataFormList =(props)=>{
//const{nume,creata,antrenor,teren,presedinte,description}=datafb


console.log(props.datafb.id)

return(
    <Card>
       
       <h1>{props.datafb.nume}</h1>
       <h3>{props.datafb.creata}</h3>
       <h3>{props.datafb.antrenor}</h3>
       <h3>{props.datafb.teren}</h3>
       <h3>{props.datafb.presedinte}</h3>
       <h3>{props.datafb.description}</h3>
       <button onClick={()=>props.deleteTeam(props.datafb.id)}>Delete</button>
       <p>{props.datafb.id}</p>
    </Card>
    )

    
}

export default DataFormList