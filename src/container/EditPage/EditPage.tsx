import React from 'react';
import { Link,useParams } from 'react-router-dom'; 
const EditPage = ()=>{

	const {id} = useParams()
	return(
		<div className = "container">
			<div className='row'>
				<h2 className='display-3 text-center'>
					Edit Page : {id}
				</h2>
				<div className='col-md-6 shadow mx-auto p-5 m-4'>
					<form>
						<div className='from-group m-3'  >
							 <input
						
							placeholder="Name"
							type="text"
							className='form-control'
							/>
						</div>
						<div className='form-group m-3'>
						 
							<input placeholder='email' type="email" 
							className='form-control'/>
						</div>
						<div className='form-group m-3'>
							<input placeholder='Phone Number' type="number" 
							className='form-control'/>
						
						</div>
						<div className='form-group'>
							<input type="submit"  value ="Update Student" className=' btn btn-dark mr-5 ' 
							/>
							<Link to ="/" className= " btn btn-danger " > Cancel</Link>
						</div>
					</form>
				</div>
			</div>

		</div>
	)
}
export default EditPage;