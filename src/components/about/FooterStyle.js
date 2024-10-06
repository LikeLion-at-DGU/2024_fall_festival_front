import styled from "styled-components";

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    
*{
    /* border: 1px solid black; */
}

#copy{
    text-align: center;
    color: rgba(0, 0, 0, 0.35);
    padding: 10px 0;
}
`

export const ButtonBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 15px;
    margin: 10px 0;

    @media (max-width: 370px) {
        flex-direction: column;
    }

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        gap: 3px;

        padding: 3px 8px;
        border-radius: 10px;
        border: 0.5px solid #BFBFBF;
        background: #FFF;
    }

    span{
        height: 100%;
        text-align: center;
        line-height: 1.8;
    }

    img{
        width: 24px;
        height: 24px;
        object-fit: cover;
    }
`