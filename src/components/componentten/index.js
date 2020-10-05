import React from 'react';



function Componentten() {
  return (
    <div className="">
    
        <h3>Component Ten</h3>
        <hr/>
        <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Windows_10_Logo.svg/1024px-Windows_10_Logo.svg.png"
        alt="new"
        className="img-responsive center-block"
        />
            <div className="text-center">
            <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td><a href="http://facebook.com">@facebook</a></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td><a href="https://twitter.com/">@twitter</a></td>
              </tr>
            </tbody>
          </table>
          </div>
      
    </div>
  );
}

export default Componentten;
