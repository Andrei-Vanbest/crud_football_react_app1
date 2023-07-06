
import {useState} from 'react'



const AddTeams=(props)=>{

   

    const[nume,setNume]=useState('')
    const[creata,setCreata]=useState('')
    const[antrenor,setAntrenor]=useState('')
    const[teren,setTeren]=useState('')
    const[presedinte,setPresedinte]=useState('')
    const[description,setDescription]=useState('')
  

   



    const addTeam=async(e)=>{
        e.preventDefault()
        const team = {
            
            nume,
            creata,
            antrenor,
            teren,
            presedinte,
            description
         }

        



        

         
         /*if(nume.length !==0 &&creata.length !==0){*/
        const response = await fetch('https://crud-operation-react1-default-rtdb.firebaseio.com/data1.json',{
                                                                        method:'POST',
                                                                        body:JSON.stringify(team)})
          const data = await response.json()
        

        
    
        
             
         props.setDataFB(prevState=>[...prevState,team])
         setNume('')
         setCreata('')
         setAntrenor('')
         setTeren('') 
         setPresedinte('')
         setDescription('')




    }


   
    

    return(
        <div className='card2'>
        <form   onSubmit={addTeam}>
            <div>
            <label><span>Nume echipa:</span> <input type='text'
                                        
                                        onChange={(e)=>setNume(e.target.value)} 
                                        value={nume}
                                        /></label> 
            </div>
            <div>
            <label><span>Anul infiintarii: </span><input type='text'
                                     
                                        onChange={(e)=>setCreata(e.target.value)} 
                                        value={creata}
                                        /></label>
            </div>
            <div>
            <label><span>Antrenor</span><input type='text'
                                        
                                        onChange={(e)=>setAntrenor(e.target.value)} 
                                        value={antrenor}
                                        /></label>
            </div>
            <div>
            <label><span>Teren:</span> <input type='text'
                                        
                                        onChange={(e)=>setTeren(e.target.value)} 
                                        value={teren}
                                        /></label>
            </div>
            <div>
            <label><span>Presedinte: </span><input type='text'
                                        
                                        onChange={(e)=>setPresedinte(e.target.value)} 
                                        value={presedinte}
                                        /></label>
            </div>
            <div>

            <label><span>Descriere:</span> <input type='text'
                                        
                                        onChange={(e)=>setDescription(e.target.value)} 
                                        value={description}
                                        /></label>
            </div>
            <button>Add your favorite team</button>
            
                                        
    </form>
    </div>
       
    
    
       
    
    
    )
    
    }

    export default AddTeams 