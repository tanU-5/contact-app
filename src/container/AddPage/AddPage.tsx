import React from 'react';
const AddPage = ()=>{
	return(
		<div className = "container">
			<div className='row'>
				<h1 className='display-3 text-center'>
					Add Student
				</h1>
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
							<input type="submit" value = "Add Student" className='btn-dark px-5 py-2' 
							/>
						</div>
					</form>
				</div>
			</div>

		</div>
	)
}
export default AddPage;