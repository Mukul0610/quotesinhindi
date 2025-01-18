export const categories = [
    { id: 'sad-shayari-hindi', english_name: "Sad Shayari", name: 'दर्द भरी शायरी', count: 2193 },
    { id: 'love-shayari-hindi', english_name: "Love Shayari", name: 'प्यार शायरी', count: 2813 },
    { id: 'funny-shayari-hindi', english_name: "Funny Shayari", name: 'मजेदार शायरी', count: 1934 },
    { id: 'heartbreak-shayari-hindi', english_name: "Heartbreak Shayari", name: 'दिल टूटने वाली शायरी', count: 1234 },
    { id: 'maa-shayari-hindi', english_name: "Mother Shayari", name: 'माँ पर शायरी', count: 353 },
    { id: 'motivational-shayari-hindi', english_name: "Motivational Shayari", name: 'प्रेरक शायरी', count: 198 },
    { id: 'philosophy-shayari-hindi', english_name: "Philosophical Shayari", name: 'दार्शनिक शायरी', count: 36 }
  ];

  export function getAllShayariCategories() {
    return categories.map(category => category.id);
  }