import axios from 'axios';
// import { userConstants } from '../commons/constants';
// import { login } from '../services/login.services';

export const SERVER = {
    // BASE_URL: "http://103.124.95.61:3001",//CHANGE HERE
    BASE_URL: "http://localhost:3000",//CHANGE HERE
    token: localStorage.getItem("token")
    
    // token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsidXNlcm5hbWUiOiJpbml0IiwiZW1haWwiOiJpbml0IiwicGFzc3dvcmQiOiJpbml0IiwiZmlyc3ROYW1lIjoiaW5pdCIsImxhc3ROYW1lIjoiaW5pdCIsInJvbGVzIjoiaW5pdCIsInN0YXR1cyI6ImluaXQiLCJfaWQiOiJpbml0IiwiZnVsbE5hbWUiOiJpbml0IiwiY29uZmlybWF0aW9uQ29kZSI6ImluaXQiLCJfX3YiOiJpbml0In0sInN0YXRlcyI6eyJpZ25vcmUiOnt9LCJkZWZhdWx0Ijp7fSwiaW5pdCI6eyJfaWQiOnRydWUsImZ1bGxOYW1lIjp0cnVlLCJyb2xlcyI6dHJ1ZSwibGFzdE5hbWUiOnRydWUsImZpcnN0TmFtZSI6dHJ1ZSwic3RhdHVzIjp0cnVlLCJjb25maXJtYXRpb25Db2RlIjp0cnVlLCJwYXNzd29yZCI6dHJ1ZSwiZW1haWwiOnRydWUsInVzZXJuYW1lIjp0cnVlLCJfX3YiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJzdHJpY3RNb2RlIjp0cnVlLCJza2lwSWQiOnRydWUsInNlbGVjdGVkIjp7fSwiZmllbGRzIjp7fSwiZXhjbHVkZSI6bnVsbCwiX2lkIjoiNjIwNzIwYjEwYTY5ZTcyYzU4YTRkMDA0In0sIiRpc05ldyI6ZmFsc2UsIl9kb2MiOnsiX2lkIjoiNjIwNzIwYjEwYTY5ZTcyYzU4YTRkMDA0IiwiZnVsbE5hbWUiOiJIb2FuZyBNaW5oIiwicm9sZXMiOlsidXNlciJdLCJsYXN0TmFtZSI6Ik1pbmgiLCJmaXJzdE5hbWUiOiJIb2FuZyIsInN0YXR1cyI6IkFjdGl2ZSIsImNvbmZpcm1hdGlvbkNvZGUiOiJ2TlhnMkVLM3dmc29ZbUJvazhsYUZBYkJhIiwicGFzc3dvcmQiOiIkMmIkMTAkYzg3VDAwVDdCRWtEL0FOQjNPUlBhTzJEdWR2TEMyVmJDaFI4VFg5MDM4U2VCbndxTzloM2kiLCJlbWFpbCI6Im1pbmhob2FuZ3plbm9AZ21haWwuY29tIiwidXNlcm5hbWUiOiJhZG1pbiIsIl9fdiI6MH0sImlhdCI6MTY0NDYzNzY4OSwiZXhwIjoxNjQ0NjczNjg5fQ.q21ZTRROwfItDIslumV09ugS714XTSH-aRQ-kkdVPkA"
    // API_KEY: "eyJ4NXQiOiJaakV4TmpaaE5qa3hOREJqT0RCak5USmpObU0wT1RneE5HVTJaakU0WVRGak5HRmxOelZoWlE9PSIsImtpZCI6ImdhdGV3YXlfY2VydGlmaWNhdGVfYWxpYXMiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhZG1pbkBjYXJib24uc3VwZXIiLCJhcHBsaWNhdGlvbiI6eyJvd25lciI6ImFkbWluIiwidGllclF1b3RhVHlwZSI6bnVsbCwidGllciI6IlVubGltaXRlZCIsIm5hbWUiOiJJbmJvdW5kQVBJIiwiaWQiOjIxLCJ1dWlkIjoiM2FhNjczMGEtNjBhMy00MThjLWJiOTktZDcxNTg3MzEyOTRhIn0sImlzcyI6Imh0dHBzOlwvXC9hcGltLmJpbGwuYWdyaWJhbmsuY29tLnZuOjk0NDNcL29hdXRoMlwvdG9rZW4iLCJ0aWVySW5mbyI6eyJVbmxpbWl0ZWQiOnsidGllclF1b3RhVHlwZSI6InJlcXVlc3RDb3VudCIsImdyYXBoUUxNYXhDb21wbGV4aXR5IjowLCJncmFwaFFMTWF4RGVwdGgiOjAsInN0b3BPblF1b3RhUmVhY2giOnRydWUsInNwaWtlQXJyZXN0TGltaXQiOjAsInNwaWtlQXJyZXN0VW5pdCI6bnVsbH19LCJrZXl0eXBlIjoiU0FOREJPWCIsInN1YnNjcmliZWRBUElzIjpbeyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoiY2FyYm9uLnN1cGVyIiwibmFtZSI6Imh2YmN2dGhjbSIsImNvbnRleHQiOiJcL2hjbVwvaHZiY3Z0aGNtXC8xLjAiLCJwdWJsaXNoZXIiOiJhZG1pbiIsInZlcnNpb24iOiIxLjAiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn0seyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoiY2FyYm9uLnN1cGVyIiwibmFtZSI6ImJlbmh2aWVudGh1ZHVjIiwiY29udGV4dCI6IlwvaGNtXC9iZW5odmllbnRodWR1Y1wvMS4wIiwicHVibGlzaGVyIjoiYWRtaW4iLCJ2ZXJzaW9uIjoiMS4wIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImNhcmJvbi5zdXBlciIsIm5hbWUiOiJiaWxscGF5bWVudC13ZWItYmFja2VuZCIsImNvbnRleHQiOiJcL2JpbGxwYXltZW50LXdlYi1iYWNrZW5kXC8xLjAiLCJwdWJsaXNoZXIiOiJhZG1pbiIsInZlcnNpb24iOiIxLjAiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn1dLCJpYXQiOjE2MzcxMTY4MzQsImp0aSI6ImRhMTE0MTNiLTYwMTQtNGU4MC04MDlhLTFhNTIyMzBkYmNiOSJ9.hP511npQTueGPGSzQzTg70VXgbWQ8zudE-0IxV-iVmuIetCWyks_x3huxbiPkAzp1LXwhkf-G-BpIdPk0IbrjMYQTPIjYTaFgUw3lpRtP3I945mNEuUQjc-NH5brlLooJ_HhKDM-4_7nc3irAPihZrVJfZ4WWqaD3vbRmIZMvAx6135iGM-tQeSR_1tGrGKjEfGddIu7kywU49RTheNNJhirxhBNDK3lQGLA4VgFBnaD4rfEJk_9Gb18qF7gp-xkvNpXh7CTnZeuuPPRFIUP6CUSVcYt_OMYTEXPiJQWAkyWOq2Yt55pfNrNyNH4IcyDX1ziRb7g1EHJ7jidaR0jPA=="
}

//
export const publicGetApi = async (url) => {
    let resp = await axios({
        method: 'GET',
        url: `${SERVER.BASE_URL}${url}`
    })
    return resp.data;
}

export const publicPostApi = async (url, data) => {
    let resp = await axios({
        method: 'POST',
        url: `${SERVER.BASE_URL}${url}`,
        data
    })
    return resp.data;
}

export const privatePostApi = async (url, data) => {
    let resp = await axios({
        method: 'POST',
        url: `${SERVER.BASE_URL}${url}`,
        data,
        headers: {
            // 'Content-Type: 'application/json',
            'Authorization': `Bearer ${SERVER.token}`
        }
    })
    return resp.data;
}

// ///PRIVATE
// export const protectedAuthInstance = axios.create({
//     baseURL: SERVER.BASE_URL,
//     timeout: 2500,
//     headers: {
//         'apikey': SERVER.API_KEY,
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//     }
// });

// // Request interceptor for API calls
// protectedAuthInstance.interceptors.request.use(
//     async (config) => {
//         const value = localStorage.getItem(userConstants.LOGIN_USER)
//         const token = JSON.parse(value)
//         config.headers = {
//             ...config.headers,
//             'customAuth': `Bearer ${token.accessToken}`
//         }
//         return config;
//     },
//     error => {
//         Promise.reject(error)
//     });

// // Response interceptor for API calls
// protectedAuthInstance.interceptors.response.use((response) => {
//     return response
// }, async (error) => {
//     const originalRequest = error.config;
//     if ((error.response.status === 417) && !originalRequest._retry) {
//         originalRequest._retry = true;
//         await refreshAccessToken();
//         return protectedAuthInstance(originalRequest);
//     }

//     if ((error.response.status === 417) && originalRequest._retry) {
//         window.location = "/login" //redirect login 
//     }

//     return Promise.reject(error);
// })

// export const refreshAccessToken = async () => {
//     let value = localStorage.getItem(userConstants.LOGIN_USER)
//     let data = JSON.parse(value)

//     try {
//         let body = await login(data)
//         //set new token
//         localStorage.setItem(userConstants.LOGIN_USER, JSON.stringify(body))
//     } catch (error) {
//         if (error.response.status === 401) {
//             window.location = "/login" //redirect login 
//             return
//         }
//         throw error
//     }
// }
