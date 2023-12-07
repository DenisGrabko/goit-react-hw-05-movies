import styled from "@emotion/styled";

export const GlobalSection = styled.section`
    display: flex;
    max-width: 1400px;
    margin-right: auto;
    margin-left: auto;
    gap: 10px;
`;

export const GlobalList = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0;
`;

export const GlobalItem = styled.li`
    list-style-type: none;
`;

export const CastList = styled.ul`
    display: flex;
    flex-direction: row;
`;

export const CastItem = styled.li`
    list-style-type: none;
    width: 150px;
    height: 300px;
`;

export const CastImage = styled.img`
    width: 150px;
    height: 200px;
    border-radius: 10%;
`;

export const CastText = styled.p`
    height: 20px; 
    color: gray;
    margin-top: 5px;
`;