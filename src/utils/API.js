import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const APIKEY = "c4e81bd625614e2ba183058baa5c64a5";
const queryFix = "&q=";

const API = {

    getArticles: function() {
        return axios.get(process.env.MONGODB_URI + "/api/articles");
    },

    saveArticle: function(article) {
        return axios.post(process.env.MONGODB_URI + "/api/articles", { article });
    },

    deleteArticle: function(id) {
        return axios.delete(process.env.MONGODB_URI + `/api/articles/${id}`);
    },

    favoriteArticle: function(article) {
        article.favorited = !article.favorited;
        const { _id, favorited } = article;
        return axios.patch(process.env.MONGODB_URI + `/api/articles/${_id}`, { favorited });
    },
    search: function(query) {
        return axios.get(BASEURL + APIKEY + queryFix + query);
    }
};

export default API;