import Styled from 'styled-components';
import { device } from './utils/mediaQueries';

const Style = Styled.div`
    background : gray;

    *{
        box-sizing:border-box;
    }

    p{
        margin:unset;
    }
    
    .ant-col{
        padding-bottom:1rem;
    }

    .container-fluid{
        width: 100%;
        margin-right: auto;
        margin-left: auto;
    }

    .container{
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
        min-height:100vh;
        @media ${device.mobileL}{
            max-width:720px;
        }
        @media ${device.tablet}{
                max-width:720px;
        }
    
        max-width:1240px;
    }

`;

export default Style;