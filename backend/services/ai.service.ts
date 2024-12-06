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


      try {
        const response = await axios.post(url, body, options);
        
        if (response.status === 200) {
          const aiResponse = response.data.choices[0]?.message?.content;
    
          if (aiResponse) {
            return aiResponse; // Return the actual AI response content
          } else {
            throw new Error("No response content found in API response.");
          }
        } else {
          throw new Error(`Error: Received status ${response.status} - ${response.statusText}`);
        }

      } catch (error) {
        if (error instanceof Error) {
          console.error("Error generating response:", error.message);
          throw new Error("Failed to get response from ChatGPT. " + error.message);
        }
        throw new Error("Failed to get response from ChatGPT");
      }
         

};