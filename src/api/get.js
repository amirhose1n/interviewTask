import axios from './index.js';
const get = axios.get;

async function getUsers(){
    try {
        let data = await get(`/users`);
        return data;
      } catch(error) {
        throw (error);
      }
}


async function getPostsByUserId(userId){
  try{
    let data = await get(`/posts?userId=${userId}`);
    return data;
  } catch(error){
    throw(error);
  }
}

async function getCommentsByPostId(postId){
  try{
    let data = await get(`/comments?postId=${postId}`);
    return data;
  } catch(error){
    throw(error);
  }
}


export {getUsers , getPostsByUserId , getCommentsByPostId};