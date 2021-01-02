import Styled from 'styled-components';

const Style = Styled.div`
    .title-box{
        width:100%;
        display:flex;
        align-items:center;
        padding:20px 0px;
        justify-content:space-between;
        .routing{
            display:flex;
            flex-direction:row;
            align-items:center;
            h2{
                color:white;
                padding-left:10px;
                margin:unset;
            }
            span{
                font-size:20px;
                color:white;
                margin-top:2px;
            }
        }
        .title{
            color:White;
            font-weight:bold;
            margin:unset;
        }
       
    }
`;

export default Style;