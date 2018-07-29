import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CLOUDINARY_UPLOAD_PRESET = 'ImageUploaderComponent';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/zelkia/image/upload';


class ImageUpload extends React.Component {
	constructor(props){
		super(props);
		this.state = { uploadedFileCloudinaryUrl: '' }
		this.onImageDrop = this.onImageDrop.bind(this);
	}

	onImageDrop(files) {
	   this.setState({
	      uploadedFile: files[0]
	    });
	   this.handleImageUpload(files[0]);
	}

  	handleImageUpload(file) {
	    let upload = request.post(CLOUDINARY_UPLOAD_URL)
	                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
	                        .field('file', file);

	    upload.end((err, response) => {
	      	if (err) {
	        	console.error(err);
	      	}

	      	if (response) {
	      		if (response.body.secure_url !== '') {
		        	this.setState({
		          		uploadedFileCloudinaryUrl: response.body.secure_url
	        		});
	        	}
	      	}
    	});
  	}

	render() {
		return (
			<div className='display-pic-container'>
			    <Dropzone
			        multiple={false}
			        accept="image/*"
			        onDrop={this.onImageDrop}>
			        <div className='dropzone-inner-container'>
			        	<FontAwesomeIcon className='upload-icon' icon='upload' />
			        </div>
			    </Dropzone>
				
			    <div>
			        {this.state.uploadedFileCloudinaryUrl === '' ? null :
		        	<div>
			          	<img className='display-pic' src={this.state.uploadedFileCloudinaryUrl} />
				        <div 
							className='display-pic-edit btn' 
							onClick={this.handleClick}>
							<FontAwesomeIcon icon='pen-square' />
						</div>
			        </div>
			    }
			    </div>
		    </div>
		)
	}
}

export default ImageUpload;