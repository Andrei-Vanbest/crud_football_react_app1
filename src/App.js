import AddTeams from './components/AddTeams'
import DataFormList from './components/DataFormList'
import './App.css';
import './index.css';
import {useState,useEffect,useCallback} from 'react'



function App() {
  const[dataFB,setDataFB]=useState([])
  const[isLoading,setIsLoading]=useState(false)
  const[error,setError]=useState(null)
  
  

 
  
 
 
  const fetchDataHandler= useCallback(async ()=>{
    setIsLoading(true)
    setError(null)
try{
    const response = await fetch('https://crud-operation-react1-default-rtdb.firebaseio.com/data1.json')
    
    if(!response.ok){
      throw new Error('Something is not ok')
     }
   
    const data = await response.json()
    
    
    const data_firebase=[]
    
    
    
    for(const key in data){
      data_firebase.push({
        id:key,
        nume:data[key].nume,
        creata:data[key].creata,
        antrenor:data[key].antrenor,
        description:data[key].description,
        teren:data[key].teren,
        presedinte:data[key].presedinte,
      })
    }
    
   
    


     setDataFB(data_firebase)
    
      
    }catch(error){
      setError(error.message)
    }
    setIsLoading(false)
    },[])
  
    useEffect(()=>{fetchDataHandler()},[fetchDataHandler])
    
    const deleteTeam =async(id)=>{
      
      
        const listTeam=dataFB.filter(dataf=>id!==dataf.id)
       setDataFB(listTeam)
       const response = await fetch(`https://crud-operation-react1-default-rtdb.firebaseio.com/data1.json`,{
        method:'DELETE'})
    }
                                                                                    

    
  
 
      

const datafootball=dataFB.map(datafb=><DataFormList  datafb={datafb} dataFB={dataFB} key={datafb.id}
  setDataFB={setDataFB}    deleteTeam ={deleteTeam }  />)
  

 
  
console.log(dataFB)
  
  return(
    <div>
      <div>
        <AddTeams   setDataFB={setDataFB} dataFB={dataFB} />
       {!isLoading && dataFB.length > 0 && datafootball }
       {!isLoading &&  dataFB.length === 0 && !error &&<p className='sw1'>Found no teams...</p>}
       {!isLoading && error && <p>{error}</p>}
       {isLoading &&<p className='sw'>IS LOADING...</p>}
       
      </div>
      
    </div>)
}

export default App;