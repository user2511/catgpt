// utils/openai.js

import axios from 'axios';

const openai = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer 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'
  }
});

export default openai;
