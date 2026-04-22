const { GoogleGenerativeAI } = require('@google/generative-ai');
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'AIzaSyBsrFrm_fOeNDD0vckgQllO6W-Rca1j4Yg');

async function test() {
    try {
        const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${genAI.apiKey}`);
        const data = await res.json();
        console.log(data.models.filter(m => m.supportedGenerationMethods.includes("generateContent")).map(m => m.name).join("\n"));
    } catch (e) {
        console.error(e);
    }
}
test();
