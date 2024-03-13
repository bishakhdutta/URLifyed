const { extractUrls, formatWithAnchors } = require('./urlifyed');

describe('extractUrls', () => {
  it('should extract URLs from text', () => {
    const text = 'Visit my website at https://example.com and check out my profile at https://example.com/profile.';
    const urls = extractUrls(text);
    expect(urls).toHaveLength(2);
    expect(urls[0].url).toBe('https://example.com');
    expect(urls[1].url).toBe('https://example.com/profile');
  });

  it('should extract URLs with different formats', () => {
    const text = 'Here are some URLs: http://x.com,youtube.com, google.com/search?q=urlifyed, and www.google.com/search?q=urlifyed&list=1&sort=desc, instagram.com/pages/profile/username';
    const urls = extractUrls(text);
    expect(urls).toHaveLength(5);
    expect(urls[0].url).toBe('http://x.com');
    expect(urls[1].url).toBe('youtube.com');
    expect(urls[2].url).toBe('google.com/search?q=urlifyed');
    expect(urls[3].url).toBe('www.google.com/search?q=urlifyed&list=1&sort=desc');
    expect(urls[4].url).toBe('instagram.com/pages/profile/username');
  });

  // Add more test cases as needed
});

describe('formatWithAnchors', () => {
  it('should format text with anchor tags for URLs', () => {
    const text = 'Visit my website at https://example.com and check out my profile at https://example.com/profile.';
    const formattedText = formatWithAnchors(text);
    expect(formattedText).toContain('<a href="https://example.com">https://example.com</a>');
    expect(formattedText).toContain('<a href="https://example.com/profile">https://example.com/profile</a>');
  });

  it('should format text with anchor tags for different URL formats', () => {
    const text = 'Here are some URLs: http://x.com,youtube.com, google.com/search?q=urlifyed, and www.google.com/search?q=urlifyed&list=1&sort=desc';
    const formattedText = formatWithAnchors(text);
    expect(formattedText).toContain('<a href="http://x.com">http://x.com</a>');
    expect(formattedText).toContain('<a href="youtube.com">youtube.com</a>');
    expect(formattedText).toContain('<a href="google.com/search?q=urlifyed">google.com/search?q=urlifyed</a>');
    expect(formattedText).toContain('<a href="www.google.com/search?q=urlifyed&list=1&sort=desc">www.google.com/search?q=urlifyed&list=1&sort=desc</a>');
  });

  // Add more test cases as needed
});
