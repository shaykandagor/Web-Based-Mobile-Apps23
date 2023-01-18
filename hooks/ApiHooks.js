import {useEffect, useState} from 'react';
import {baseUrl} from '../utils/variables';

/* eslint-disable-next-line no-unused-vars */
const doFetch = async (url, options) => {
  const response = await fetch(url, options);
  const json = await response.json();
  if (!response.ok) {
    const message = json.error
      ? `${json.message} : ${json.error}`
      : json.message;
    throw new Error(message || response.statusText);
  }
  return json;
};

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);

  const loadMedia = async () => {
    try {
      const response = await fetch(baseUrl + 'media');
      const json = await response.json();
      const media = await Promise.all(
        json.map(async (file) => {
          const fileResponse = await fetch(baseUrl + 'media/' + file.file_id);
          return await fileResponse.json();
        })
      );

      setMediaArray(media);
    } catch (error) {
      console.error('List, loadMedia', error);
    }
  };

  useEffect(() => {
    loadMedia();
  }, []);

  return {mediaArray};
};

const useAuthentication = () => {
  const postLogin = async (userCredentials) => {
    // user credentials format: {username: 'someUsername', password: 'somePassword'}
    // eslint-disable-next-line no-unused-vars
    const options = {
      // TODO: add method, headers and body for sending json data with POST
    };
    try {
      // TODO: use fetch to send request to login endpoint and return the result as json, handle errors with try/catch and response.ok
    } catch (error) {
      throw new Error(error.message);
    }
  };
  return {postLogin};
};

// https://media.mw.metropolia.fi/wbma/docs/#api-User
const useUser = () => {
  const checkUser = async () => {
    // call https://media.mw.metropolia.fi/wbma/docs/#api-User-CheckUserName
  };
  return {checkUser};
};

export {useMedia, useAuthentication, useUser};
