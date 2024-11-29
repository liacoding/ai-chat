import axios from "axios";
import { ENV_VARS } from "../config/envVars.js";

export const generateAiResponseService = async (message: string) => {

    const url = "https://api.openai.com/v1/chat/completions";

    const body = {
        "model": "gpt-3.5-turbo",
        "messages": [
          {"role": "system", "content": "You are a helpful assistant."},
          {"role": "user", "content": message}
        ],
        "max_tokens": 100,
        "temperature": 0.7
      };

      const options = {
        headers: {
          "Authorization": 'Bearer ' + ENV_VARS.CHAT_GPT_API_KEY,
          "Content-Type": 'application/json',
        },
      };

      
        const response = await axios.post(url, body, options);
        console.log('Response received:', response.data.choices[0].message.content);
    
        if(response.status !== 200){
            throw new Error('Failed to get response from ChatGPT' + response.statusText);
        }

        return response.data.choices[0].message.content;

};