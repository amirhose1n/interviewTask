import Style from './style';
import { Card, Col, Row } from 'antd';

const Comments = props => {
    const { comments , current } = props;
    let filteredComments = comments.slice(current , current+3);
    return(
        <Style>
            <Row className='comments-view-container' gutter={16}>
            {filteredComments.map(e => {
            const { email , name , body } = e;
            return  <Col span={24}>
                        <Card title={name + ' - ' + email} bordered={false}>
                            {body}
                        </Card>
                    </Col>
            })}
            </Row>
        </Style>
    )
}

export default Comments;