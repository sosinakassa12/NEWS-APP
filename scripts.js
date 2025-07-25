const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
async function fetchNews(){
    try{
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        displayNews(data.articles);
    }catch (error) {
    console.error('There was an error!', error);
  }


}

fetchNews();
function displayNews(articles) {
    const newsDiv = document.querySelector('#news');

    for (const article of articles) {
        const articleDiv = document.createElement('div');
        articleDiv.className = 'article-card'; 

        // Headline
        const title = document.createElement('h4');
        title.textContent = article.title;
        articleDiv.appendChild(title);

        // Author
        const author = document.createElement('p');
        author.textContent = article.author ? `By ${article.author}` : 'Author unknown'; // If article.author exists, use it otherwise, show this fallback text
        articleDiv.appendChild(author);

        // Source
        const source = document.createElement('p');
        source.textContent = article.source && article.source.name
            ? `Source: ${article.source.name}`
            : 'Source unknown';
        articleDiv.appendChild(source);

        // Published Date
        const publishedAt = document.createElement('p');
        const readableDate = new Date(article.publishedAt).toLocaleString();
        publishedAt.textContent = `Published: ${readableDate}`;
        articleDiv.appendChild(publishedAt);

        // Link to full article
        const link = document.createElement('a');
        link.href = article.url;
        link.textContent = 'Read full article';
        articleDiv.appendChild(link);

        // Append to news container
        newsDiv.appendChild(articleDiv);
    }
}
