import React,{useEffect , useState } from 'react';
import PageTitle from '../../compoents/pageTitle';
import { getUsers } from '../../api/get';
import { Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';

const Users = () => {

    const [ users , setUsers ] = useState([]);

    const callUsers = async () => {
        try{
            let users = await getUsers();
            const { data } = users;
            setUsers(data);
        }catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
       callUsers();
    },[])

    return (
        <div className='container-fluid'>
            <div className='container'>
                <PageTitle title="users"/>
                <Row gutter={16}>
                    {users && users.map((e,key) => {
                        const { username , name , email , website , address , id } = e;
                        const { city } = address;
                        return(
                        <Col key={key} span={12}>
                            <Link to={`/posts/${id}`}>
                                <Card title={username + ' - ' + name} bordered={false}>
                                    city : {city} <br/>
                                    email : {email} <br/>
                                    website : {website}
                                </Card>
                            </Link>
                        </Col>
                        )
                    })}
                </Row>
            </div>
        </div>
    )
}

export default Users;