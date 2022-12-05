import Article from "../Article/Article";
import Video from "../Video/Video";

const List = (props) => {
    return props.list.map((item) => {
        switch (item.type) {
            case "video":
                return <Video key={item.url} {...item} />;

            case "article":
                return <Article key={item.title} {...item} />;
            default: {
                return null
            }
        }
    });
}

export default List