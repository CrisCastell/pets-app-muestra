import React,{Component} from 'react';
import axios from 'axios';
import Uploader from './Uploader'
 
class Profile extends Component {
  
    state = {
 
      // Initially, no file is selected
      selectedFile: null
    };
    
    // On file select (from the pop up)
    
    
    // On file upload (click the upload button)
    onFileUpload = (formData) => {
    
        // Create an object of formData
        // console.log(formData.get('profile_image'))

        const authenticatedAxios = axios.create({
            baseURL: 'http://127.0.0.1:8000/api',
            headers: {

                'Authorization': `Token 9a15fc371b842f72d44a2d4b3abddf6e56d8317d`
        
            }
        });
        authenticatedAxios.put("http://127.0.0.1:8000/api/accounts/image/1", formData)
        .then(resp => {
            console.log(resp.data);
        })
        .catch(err => {
            // Handle Error Here
            console.error(err);
        });
        
    };
    

    
    
    render() {
    
      return (
        <div>
            <h1>
              GeeksforGeeks
            </h1>
            <h3>
              File Upload using React!
            </h3>
            <div>
                <Uploader handleOnSave={this.onFileUpload} />
            </div>
        </div>
      );
    }
  }
 
  export default Profile;