import axios from "axios";

const galleryServices = axios.create({
     baseURL: 'https://pixabay.com/api',
})
export const getGallery = async(search,page) =>{
    const response = await galleryServices.get(`/`, {params: {
         key : '32790565-383584a211a893fe9ad088e3f',
        imageType: 'photo',
        orientation: 'horizontal',
        perPage: 12,
        page: page,
        q:search,
       }});
//    console.log(response.data);
    return response.data;
}


/*==================*/
// const API_KEY = '32790565-383584a211a893fe9ad088e3f';
// const BASE_URL = 'https://pixabay.com/api';
// export const getGallery = async(search,page) =>{
//     const response = await axios.get(`${BASE_URL}?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12

// `);
// //    console.log(response.data);
//     return response.data;
// }
