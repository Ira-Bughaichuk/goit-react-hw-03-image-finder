import axios from "axios";

const galleryServices = axios.create({
     baseURL: 'https://pixabay.com/api',
})
export const getGallery = async (search, page) => {
     const response = await galleryServices.get(`/`, {
          params: {
               key: '32790565-383584a211a893fe9ad088e3f',
               image_type: 'photo',
               orientation: 'horizontal',
               per_page: 12,
               page: page,
               q: search,
          }
     });
     return response.data;
}

