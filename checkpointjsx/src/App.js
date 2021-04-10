
import './App.css';
import ReactPlayer from 'react-player/youtube';
import dbs from "./component/dbs.jpg";
function App() {
  return (
    <div className='a' style={{border:"solid 1px black",maxwidth:"100vw"}}>
<div>
  
 <h1 className='title red'>Mohamed amine sbei</h1>
</div><br/>
 <div>

 <img className='med' src={dbs}   alt={dbs}/>
</div>
 
<div>
 <img  src="b.jpg" alt="b"/>

</div>
<div>
<video width="320" height="240" controls>

<ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>

</video></div>
</div>    
  );
}

export default App;
