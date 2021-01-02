import Style from './style';
import { Button } from 'antd';

const CommentsButton = props => {

    return(
        <Style>
            <Button {...props} >
                show comments
            </Button>
        </Style>
    )
}

export default CommentsButton;