import FeedStories from './FeedStories';
import Sidebar from './Sidebar';

export default function ContainerBox(){
    return(
        <div class = "containerStyle">
            <FeedStories/>
            <Sidebar/>
        </div>
    );
}