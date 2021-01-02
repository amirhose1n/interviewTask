import Style from './style';
import { Link } from 'react-router-dom';
import { LeftCircleOutlined } from '@ant-design/icons';

const PageTitle = props => {
    const { title , routing } = props;

    return(
        <Style>
            <div className='title-box'>
                <h1 className='title'> {title} </h1>
                {routing && 
                <Link to={routing.link}>
                    <div className='routing'>
                        <LeftCircleOutlined />
                        <h2>
                            {routing.title}
                        </h2>
                    </div>
                </Link>}
            </div>
        </Style>
    )
}

export default PageTitle;