import React,{useEffect , useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { Card, Col, Row , Modal} from 'antd';
import PageTitle from '../../compoents/pageTitle';
import { getPostsByUserId } from '../../api/get';
import PostContentBox from '../../compoents/postContentBox';
import { getCommentsByPostId } from '../../api/get';
import CommentsPagination from '../../compoents/pages/posts/commentsPagination';
import CommentsView from '../../compoents/pages/posts/commentsView';
import CommentsButton from '../../compoents/pages/posts/commentsButton';
import {SET_COMMENTS , SET_COMMENTS_LOADING} from '../../state/comments/actions';


const Posts = (props) => {
    
    const [ posts , setPosts ] = useState([]);
    const [ currentPage , setCurrentPage ] = useState(1);
    const { match : { params : { userId }}} = props;
    const commentsState = useSelector(state => state.commentsState);
    const { comments , loading } = commentsState;
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch({type: SET_COMMENTS , value: []});
        setCurrentPage(1);
    }

    const callPosts = async (userId) => {
        try{
            let users = await getPostsByUserId(userId);
            const { data } = users;
            setPosts(data);
        }catch(e){
            console.log(e);
        }
    }

    const getComments = async (postId) => {
        dispatch({type: SET_COMMENTS_LOADING , value: postId});
        try{
            const res = await getCommentsByPostId(postId); 
            const { data } = res;
            dispatch({type: SET_COMMENTS_LOADING , value: false});
            dispatch({type: SET_COMMENTS , value: data});
        }catch(e){
            console.log(e);
            dispatch({type: SET_COMMENTS_LOADING , value: false});
        }
    }

    useEffect(() => {
       callPosts(userId);
    },[userId])

    return (
        <div className='container-fluid'>
        <div className='container'>
            
            <PageTitle title="user posts" routing={{ title:'back to users' , link:'/'}}/>

            <Row gutter={16}>
                {posts && posts.map((e,key) => {
                    const {body, title, id} = e;
                    return(
                        <Col key={key} lg={8} md={8} sm={12} xs={24}>
                            <Card title={title} bordered={false}>
                                
                                <PostContentBox>
                                    {body}
                                </PostContentBox>

                                <CommentsButton 
                                onClick={() => getComments(id)} 
                                disabled={loading === id} 
                                loading={loading === id}/>
                            
                            </Card>
                        </Col>)
                })}
            </Row>

            <Modal
                visible={comments && comments.length > 0 ? true : false}
                onCancel={closeModal}
                footer={null}
                >
                     <CommentsView comments={comments} current={currentPage} />
                     <CommentsPagination 
                        total={comments.length * 10 / 2}
                        defaultCurrent={1}
                        current={currentPage}
                        onChange={setCurrentPage}
                    />
            </Modal>

        </div>
    </div>
    )
}

export default Posts;