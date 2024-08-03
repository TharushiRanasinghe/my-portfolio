import React from 'react';
import styled from 'styled-components';

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const Span = styled.span`
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`;

const Card = styled.div`
    width: 100%;
    max-width: 650px;
    border-radius: 10px;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    &:hover {
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px) {
        padding: 10px;
        gap: 8px;
    }

    &:hover ${Document} {
        display: flex;
    }

    &:hover ${Span} {
        overflow: visible;
        -webkit-line-clamp: unset;
    }

    border: 0.1px solid #854CE6;
`;

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
`;

const Image = styled.img`
    height: 40px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px) {
        height: 40px;
    }
`;

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`;

const C_Name = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

const Offered_By = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const Date = styled.div`
    font-size: 13px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px) {
        font-size: 11px;
    }
`;

const Credentials = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const Skills = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    margin-top: -30px;
    font-size: 14px;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px) {
        font-size: 12px;
        margin-top: -25px;
    }
`;

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`;

const Skill = styled.div`
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const Button = styled.a`
    display: inline-block;
    padding: 6px 6px;
    margin-top: 5px;
    margin-left:3px;
    font-size: 13px;
    font-weight: 700;
    color: #626970;
    background-color: transparent;
    border: 1px solid #626970;  
    border-radius: 10px;
    text-decoration: none;
    text-align: center;
    transition: background-color 0.3s, color 0.3s;
    &:hover {
        background-color: transparent;
        color: #fff;
        border: 1px solid #fff; 
    }
        @media only screen and (max-width: 768px) {
        font-size: 11px;
        padding: 5px 5px;
    }
`;

const CertificationCard = ({ certification }) => {
    return (
        <Card>
            <Top>
                <Image src={certification.img} />
                <Body>
                    <C_Name>{certification.name}</C_Name>
                    <Offered_By>Offered By: {certification.offered_by}</Offered_By>
                    <Date>{certification.date}</Date>
                </Body>
            </Top>
            <Credentials>
                <b>Credentials: </b>
                <Button href={certification.credential} target="_blank" rel="noopener noreferrer">
                    View Credential
                </Button>
            </Credentials>
            <Description>
                {certification?.skills &&
                    <>
                        <br />
                        <Skills>
                            <b>Skills:</b>
                            <ItemWrapper>
                                {certification?.skills?.map((skill, index) => (
                                    <Skill key={index}>• {skill}</Skill>
                                ))}
                            </ItemWrapper>
                        </Skills>
                    </>
                }
                {certification?.desc &&
                    <>
                        <br/>
                        <Span>{certification?.desc}</Span>
                    </>
                }    
            </Description>
        </Card>
    );
}

export default CertificationCard;
