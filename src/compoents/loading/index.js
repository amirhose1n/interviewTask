import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
const Loading = props => <Spin indicator={antIcon} {...props}/>;

export default Loading;