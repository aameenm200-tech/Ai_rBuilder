import axiosService from "../api/axiosService";



// save resume API: called by ResumeInput component when finish button clicks 

export const saveResumeApi = async (resumeDetails) => {

   return await axiosService("POST","/resumes",resumeDetails)

}
// view resume API: called by view component when the page loads in browser 

export const viewResumeApi = async (resumeId) => {

   return await axiosService("GET",`/resumes/${resumeId}`,{})

}

// view All resume API: called by saved component when the page loads in browser 

export const getAllResumesApi = async () => {

   return await axiosService("GET",`/resumes`,{})

}

// remove resume API: called by saved component when delete button clicks 

export const deleteResumeApi = async (resumeId) => {

   return await axiosService("DELETE",`/resumes/${resumeId}`,{})

}
