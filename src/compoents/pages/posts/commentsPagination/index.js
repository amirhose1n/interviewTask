import Style from './style';
import { Pagination  } from 'antd';

const CommentsPagination = props => {

    return(
        <Style>
           <Pagination {...props}/>
        </Style>
    )
}

export default CommentsPagination;