export const categories = [
    { id: 'sad-shayari-hindi', english_name: "Sad Shayari", name: 'दर्द भरी शायरी', count: "2.0K" },
    { id: 'love-shayari-hindi', english_name: "Love Shayari", name: 'प्यार शायरी', count: "1.2K" },
    { id: 'funny-shayari-hindi', english_name: "Funny Shayari", name: 'मजेदार शायरी', count: "1.0K" },
    { id: 'heartbreak-shayari-hindi', english_name: "Heartbreak Shayari", name: 'दिल टूटने वाली शायरी', count: "1.2K" },
    { id: 'maa-shayari-hindi', english_name: "Mother Shayari", name: 'माँ पर शायरी शायरी', count: "1.1K" }
  ];

  export function getAllShayariCategories() {
    return categories.map(category => category.id);
  }