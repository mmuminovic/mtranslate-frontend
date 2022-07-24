import axios from 'axios';

export const getAllApps = () =>
  new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get('/application');
      resolve(res.data);
    } catch (error) {
      reject(error);
    }
  });

export const getAppData = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(`/application/${id}`);
      resolve(res.data);
    } catch (error) {
      reject(error);
    }
  });

export const getLanguageDataForApp = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(`/language/${id}`);
      resolve(res.data);
    } catch (error) {
      reject(error);
    }
  });

export const saveLanguageData = (id, data) =>
  new Promise(async (resolve, reject) => {
    try {
      const res = await axios.patch(`/language/update/${id}`, { data });
      resolve(res.data);
    } catch (error) {
      reject(error);
    }
  });

export const startMPQuiz = (email) =>
  new Promise(async (resolve, reject) => {
    try {
      const quiz = await axios.post('/quiz/mp/start', { email });
      resolve(quiz.data);
    } catch (error) {
      reject(error);
    }
  });

export const submitAnswerMP = (id, answer, init, questionId) =>
  new Promise(async (resolve, reject) => {
    try {
      const data = await axios.post(`/quiz/mp/${id}`, { answer, init, questionId });
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
