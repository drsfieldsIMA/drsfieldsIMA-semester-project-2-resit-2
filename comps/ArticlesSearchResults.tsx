/** @format */

const ArticlesSearchResult = ({ articles }: { articles: string[] }) => {
	return articles?.length > 0 ? (
		<div className='search-grid'>
			{articles?.map((article) => (
				<div key={article} className='articles-card'>
					{article}
				</div>
			))}
		</div>
	) : (
		<div className='search-message'> No articles found</div>
	);
};

export default ArticlesSearchResult;
