import styled from "styled-components";

const TitleLayout = styled.div`
margin-bottom: 2.25rem;
height: 3rem;
`;

const SubTitleLayout = styled.div`
margin-bottom: .625rem;
`;

const Title = styled.h1`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 44px;
color: #FF8A00;
position: relative;
`;

const Title2 = styled.h1`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 29px;
color: #FF8A00;
`;

const Box = styled.span`
position: absolute;
height: 8px;
width: 300px;
left: 0px;
top: 31px;
border-radius: 0px;

border-bottom-width: 8px;
background-color: #EEEEEE;
`;


export const MainTittle = ({ children }) => {

    return (
        <TitleLayout>
            <Title>
                <span style={{ position: 'absolute', zIndex: '2' }}>
                    {children}
                </span>
                <Box />
            </Title>
        </TitleLayout>
    );
};

export const BasicTitle = ({ children }) => {

    return (
        <SubTitleLayout>
            <Title2>
                {children}
            </Title2>
        </SubTitleLayout>
    );
};
