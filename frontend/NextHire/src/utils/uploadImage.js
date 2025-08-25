import { API_PATHS } from "./apiPaths"
import axiosInstance from "./axiosInstance"

const uploadImage = async (imageFile) => {
  const formData = new FormData()
  //apend fimage file to form data
  formData.append("image", imageFile)

  try {
    const response = await axiosInstance.post(
      API_PATHS.IMAGE.UPLOAD_IMAGE,
      formData,
      {
        headers: {
          "Content-type": "multipart/form-data", // set header for file upload
        },
      }
    )
    return response.data // return response data
  } catch (error) {
    console.error("Error uploading the image: ", error)
    throw error // rethrow for handling
  }
}

export default uploadImage
