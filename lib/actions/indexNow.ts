export const submitToIndexNow = async (urls:any, key:any) => {
    const API_ENDPOINT = `https://api.indexnow.org/indexnow`;
    
    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          host: process.env.NEXT_PUBLIC_API_URL,
          key: key,
          urlList: Array.isArray(urls) ? urls : [urls],
          keyLocation: `${process.env.NEXT_PUBLIC_API_URL}/${key}.txt`
        }),
      });
      
      return response.ok;
    } catch (error) {
      console.error('IndexNow submission failed:', error);
      return false;
    }
  };