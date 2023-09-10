import Card from './components/Card/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <div className="container">
      <Card>
        <div className="card" style={{width: 18 + 'rem'}}>        
          <img src='https://sobakovod.club/uploads/posts/2021-12/thumbs/1639036549_5-sobakovod-club-p-sobaki-sobaka-na-otdikhe-5.jpg' 
              className="card-img-top" alt='Image cap'/>
          <div className="card-body">
            <h5 className="card-title">Карточка с картинкой</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href='#' className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </Card>

      <Card>
        <div className="card" style={{width: 18 + 'rem'}}>                
          <div className="card-body">
            <h5 className="card-title">Карточка без картинки</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href='#' className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </Card>

   </div>
  );
}

export default App;
