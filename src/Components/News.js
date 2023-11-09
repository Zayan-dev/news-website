import React, { Component } from 'react'
import NewsItem from '../NewsItem'
import Loading from './Loading';
// import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      bool: false,
      // pageSize:3
    }
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=73826280480049b89a1ecbda16cd6d7f&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
  }

   handlePrev=async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=73826280480049b89a1ecbda16cd6d7f&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData= await data.json();
    this.setState({
      articles:parsedData.articles ,
      page:this.state.page-1,
      bool:false,
      loading:false
    });
   }


   handleNext=async()=>{
    if(this.state.page+1>Math.ceil(this.state.totalResults/this.state.pageSize)){
      this.setState({
        bool:true
      })
    }

    else{
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=73826280480049b89a1ecbda16cd6d7f&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData= await data.json();
    this.setState({
      articles:parsedData.articles ,
      page:this.state.page+1,
      loading:false
    });
  }
   }

  // fetchdata = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=73826280480049b89a1ecbda16cd6d7f&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  //   // this.setState({loading:true})
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   this.setState({
  //     articles: this.articles.concat(parsedData.articles),
  //     // page:this.state.page+1,
  //     // loading:false
  //   });
  // }

  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className='text-center'>Top US HeadLines</h2>
          {this.state.loading&&<Loading/>}

          {/* <InfiniteScroll
            dataLength={this.state.articles.length} //This is important field to render the next data
            next={fetchData}
            hasMore={this.state.articles.length !== this.state.totalResults.length}
            loader={<Loading />}
          > */}

            <div className="row"  >
              {!this.state.loading&&this.state.articles.map((element) => {
                return <div className='col-md-4 my-1' key={element.url}>
                  <NewsItem title={element.title.slice(0, 35)} description={element.description !== null ? element.description.slice(0, 50) : element.description} imgUrl={element.urlToImage !== null ? element.urlToImage : "https://media.npr.org/assets/img/2023/08/15/gettyimages-1563724712_wide-271e66f66cc86a2421a76e13357c6f8b1165bca0-s1400-c100.jpg"} newsUrl={element.url} />
                </div>
              })}
            </div>
          {/* </InfiniteScroll> */}

        </div>
        <div className="container buttons d-flex justify-content-between" >
      <button onClick={this.handlePrev} disabled={this.state.page<=1?true:false} type="button" class="btn btn-dark btn-lg">&larr; Previous</button>
      <button disabled={this.state.bool} onClick={this.handleNext} type="button" class="btn btn-dark btn-lg">Next &rarr;</button>
    </div>
      </>
    )
  }
}

export default News
