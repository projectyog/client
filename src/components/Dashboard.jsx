import React,{useState}from 'react';
import { NavLink ,useNavigate} from 'react-router-dom';

const Dashboard = () => {
  
  const [urls, setUrls] = useState({
    full: "", 
  });
  
  // Handle Input
  const handleChange = (event) =>{
    let name = event.target.name
    let value = event.target.value

    setUrls({...urls, [name]:value})
  }
  //handle submit

  const handleSubmit = async (event) => {
    event.preventDefault();
const { full } = urls;
try{
   await fetch('/shortUrls',{
    method : "POST",
    headers : {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify({
      full,
    })
  })
} catch (error){
  console.log(error);
}
  }
    return (
        <div>
            <div className="container-fluid mb-5">
        <div className="row">
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">URL Shortner App</h1> 
              </div>
              <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input type="url" name="full"  value={urls.full}
                  onChange={handleChange} className="form-control" placeholder="Put your long url here..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Submit</button>
                </div>
              </div>
              </form>
              <div className="table-responsive">
              <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Full URL    </th>
                  <th scope="col">Short URL</th>
                  <th scope="col">No. of Clicks</th>
                 </tr>
                </thead>
                 <tbody>
                  <tr>
                    <th scope="row">index</th>
                    <td>fullurl</td>
                    <td>shortUrl</td>
                    <td></td>
                  
                  </tr> 
                  <tr>
                    <th scope="row">index</th>
                    <td>fullurl</td>
                    <td>shortUrl</td>
                    <td></td>
                  
                  </tr> 
                  <tr>
                    <th scope="row">index</th>
                    <td>fullurl</td>
                    <td>shortUrl</td>
                    <td></td>
                  
                  </tr>  
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
        </div>
    );
}

export default Dashboard;