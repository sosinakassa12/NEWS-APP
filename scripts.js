const apiKey = Process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
async function fetchNews(){
    try{
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        displayNews(data);
    }catch (error) {
    console.error('There was an error!', error);
  }


}

fetchNews();