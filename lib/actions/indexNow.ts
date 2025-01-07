
export const submitToIndexNow = async (urls: string | string[], key: string) => {
  const API_ENDPOINT = 'https://www.bing.com/indexnow';
  const host = process.env.NEXT_PUBLIC_API_URL?.replace(/https?:\/\//, '').replace(/\/$/, '');
  
  if (!host) {
    console.error('NEXT_PUBLIC_API_URL is not properly configured');
    return { success: false, error: 'Invalid host configuration' };
  }

  // Validate URLs
  const urlList = Array.isArray(urls) ? urls : [urls];
  const validUrls = urlList.filter(url => {
    try {
      new URL(url);
      return true;
    } catch {
      console.error(`Invalid URL: ${url}`);
      return false;
    }
  });

  if (validUrls.length === 0) {
    return { success: false, error: 'No valid URLs to submit' };
  }

  const payload = {
    host,
    key,
    urlList: validUrls,
    keyLocation: `https://${host}/${key}.txt`
  };

  console.log('Submitting to IndexNow with payload:', payload);

  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const responseText = await response.text();
    console.log('IndexNow API Response:', {
      status: response.status,
      statusText: response.statusText,
      body: responseText
    });

    if (!response.ok) {
      return { 
        success: false, 
        error: `API Error: ${response.status} ${response.statusText}`,
        details: responseText
      };
    }

    return { success: true };
  } catch (error) {
    console.error('IndexNow submission failed:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error',
      details: error
    };
  }
};