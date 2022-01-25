const ArticlesSearchResult = ({ articles,id }: { articles: string[],id:string }) => {
  return articles.length > 0 ? (
    <div className="search-grid">
      {articles.map((article) => (
        <div key={id} className="pokemon-card">{article}</div>
      ))}
    </div>
  ) : (
    <div className="search-message"> No articles found</div>
  );
};

export default ArticlesSearchResult;