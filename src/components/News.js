import React, { Component } from "react";
import NewsItems from "./NewsItems";
import defaultImage from "./default_image.png";
import Spinner from "./Spinner";

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: [],
      loading: false,
      page: 1,
    };
    document.title = this.props.category;
  }
  async componentDidMount() {
    console.log("componentDidMount");
    let url = `https://newsapi.org/v2/top-headlines?country=&category=${this.props.category}&apiKey=46b40c41be6f4c4591ffc23638e378df&page=${this.state.page}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      article: parseData.articles,
      loading: false,
    });
  }
  handleNextClick = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=46b40c41be6f4c4591ffc23638e378df&page=${this.state.page}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      article: parseData.articles,
      loading: false,
    });
  };
  handlePreviousClick = async () => {
    this.setState({
      page: this.state.page - 1,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=46b40c41be6f4c4591ffc23638e378df&page=${this.state.page}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      article: parseData.articles,
      loading: false,
    });
  };
  render() {
    console.log("render");
    return (
      <>
        <div className="container">
          <h2>News Monkey</h2>
          {this.state.loading && <Spinner />}
          <div className="row">
            {this.state.article.map((eachArticle) => {
              return (
                <div className="col-md-3" key={eachArticle.url}>
                  <NewsItems
                    title={
                      eachArticle.title === null
                        ? ""
                        : eachArticle.title.slice(0, 88)
                    }
                    description={
                      eachArticle.description === null
                        ? ""
                        : eachArticle.description.slice(0, 45)
                    }
                    imageUrl={
                      eachArticle.urlToImage === null
                        ? defaultImage
                        : eachArticle.urlToImage
                    }
                    newsUrl={eachArticle.url}
                    author={
                      eachArticle.author != null
                        ? eachArticle.author
                        : "unknown"
                    }
                    date={eachArticle.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="container">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-light"
            onClick={this.handlePreviousClick}
          >
            Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next
          </button>
        </div>
      </>
    );
  }
}

export default News;
