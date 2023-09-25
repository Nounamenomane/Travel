import css from "./BLogInfo.module.css";
import search from "./ic_search.png";
import ratio1 from "./IMG1.png";
import ratio2 from "./IMG2.png";
import ratio3 from "./IMG3.png";
import ratio4 from "./IMG4.png";
import greenDot from "./Ellipse 16.png";
import dot from "./dot.png";

function BlogInfo() {
  const recentPosts = (img, title, date) => {
    return (
      <div className={css.posts}>
        <img src={img} alt="" />
        <div className={css.post}>
          <h3 className={css.post_title} title={title}>
            {title}
          </h3>
          <div>
            <p>{date}</p>
            <img src={greenDot} alt="" />
            <p>8 min read</p>
          </div>
        </div>
      </div>
    );
  };
  const popularTags = (text1, text2, text3) => {
    return (
      <div className={css.popular}>
        <button>
          <p>{text1}</p>
        </button>
        <button>
          <p>{text2}</p>
        </button>
        <button>
          <p>{text3}</p>
        </button>
      </div>
    );
  };
  const categoryText = (text) => {
    return (
      <div className={css.category}>
        <img src={dot} alt="" />
        <p>{text}</p>
      </div>
    );
  };
  return (
    <div className={css.blog_info}>
      <div className={css.search}>
        <img src={search} alt="" />
        <input type="text" placeholder="Search" />
      </div>
      <div className={css.categories}>
        <h1>Categories</h1>
        {categoryText("Marketing")}
        {categoryText("Community")}
        {categoryText("Tutorials")}
        {categoryText("Business")}
        {categoryText("Management")}
      </div>
      <div className={css.recentPosts}>
        <h1>Recent Posts</h1>
        {recentPosts(
          ratio1,
          "Understanding color theory: the color wheel and finding",
          "November 7, 2017"
        )}{" "}
        {recentPosts(
          ratio2,
          "How to design a product that can grow itself 10x in year",
          "October 24, 2018"
        )}{" "}
        {recentPosts(
          ratio3,
          "Any mechanical keyboard enthusiasts in design?",
          "November 28, 2015"
        )}{" "}
        {recentPosts(
          ratio4,
          "Yo Reddit! What’s a small thing that anyone can do at nearly",
          "May 29, 2017"
        )}
      </div>
      <div className={css.popularTags}>
        <h1>Popular Tags</h1>
        <div className={css.tags}>
          {popularTags("Marketing", "Development", "Banking")}
          {popularTags("HR & Recruting", "Design", "Management")}
          {popularTags("Business", "Community", "Tutorials")}
        </div>
      </div>
      <div className={css.advertisement}>
        <div className={css.advertisement_desc}>
          <h2>Advertisement</h2>
          <p>Duis leo. Donec orci lectus, aliquam ut, faucibus non</p>
          <button className={css.go}>Go Now</button>
        </div>
      </div>
    </div>
  );
}

export default BlogInfo;
