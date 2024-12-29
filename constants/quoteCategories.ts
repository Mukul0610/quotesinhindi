export const categories = [
    { id: 'inspirational-quotes-hindi', english_name: "inspirational", name: 'प्रेरणादायक', count: 29000 },
    { id: 'life-quotes-hindi', english_name: "life", name: 'जीवन', count: 36000 },
    { id: 'love-quotes-hindi', english_name: "love", name: 'प्यार', count: 39100 },
    { id: 'faith-quotes-hindi', english_name: "faith", name: 'आस्था', count: 8200 },
    { id: 'success-quotes-hindi', english_name: "success", name: 'सफलता', count: 8100 },
    { id: 'happiness-quotes-hindi', english_name: "happiness", name: 'ख़ुशी', count: 10400 },
    { id: 'motivational-quotes-hindi', english_name: "motivational", name: 'प्रेरणा', count: 6100 },
    { id: 'wisdom-quotes-hindi', english_name: "wisdom", name: 'ज्ञान', count: 10100 },
    { id: 'humor-quotes-hindi', english_name: "humor", name: 'हास्य', count: 14000 },
    { id: 'philosophy-quotes-hindi', english_name: "philosophy", name: 'दर्शन', count: 14900 },
    { id: 'hope-quotes-hindi', english_name: "hope", name: 'आशा', count: 9600 },
    { id: 'romance-quotes-hindi', english_name: "romance", name: 'आशा', count: 9500 },
    { id: 'poetry-quotes-hindi', english_name: "poetry", name: 'कविता', count: 7100 },
    { id: 'god-quotes-hindi', english_name: "god", name: 'ईश्वर', count: 12500 },
    { id: 'religion-quotes-hindi', english_name: "religion", name: 'धर्म', count: 7200 },
    { id: 'spirituality-quotes-hindi', english_name: "spirituality", name: 'आध्यात्मिकता', count: 5500 },
    { id: 'time-quotes-hindi', english_name: "time", name: 'समय', count: 6000 },
    { id: 'you-quotes-hindi', english_name: "you", name: 'आप', count: 5400 },
    { id: 'bhagavad-gita-quotes-hindi', english_name: "bhagavad gita", name: 'भागवद गीता', count: 20 },
  ];


  export function getAllCategories() {
    return categories.map(category => category.id);
  }
