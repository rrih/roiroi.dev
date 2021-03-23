import React, { useEffect, useState } from "react"
import styled from 'styled-components'
import axios from "axios";

const IndexPage = () => {
    // TODO any 型なのであとでお型付けする
    const [data, setData] = useState<any>();

    useEffect(() => {
        axios.get('https://api.github.com/users/rrih')
            .then((e) => {
                setData(e.data)
            })
            .catch((e) => {
                console.log(e)
            })
            .finally(() => {
            });
    }, [])
    return <>
        <Header>
            <div>roiroi.dev</div>
        </Header>
        <SectionBody>
            <h2>🥺</h2>
            <div><Img src={data.avatar_url} /></div>
            <div>1997.9 ~</div>
            <div>{data != null ? data.name : null}</div>
            <div>{data != null ? data.bio : null}</div>
            <div>2017.4 - 2021.3 某大理工学部</div>
            <div>2020.9 -  某社 web dev part time job</div>
            <div>
                TypeScript - PHP🐘🍰
            </div>
            <div>followers: {data.followers} following: {data.following}</div>
            <div>公開リポジトリ数: {data.public_repos} 公開 gist 数: {data.public_gists}</div>
            <div><a href={data != null ? data.html_url : ''}>GitHub</a> created at {data != null ? data.created_at : null}</div>
            <div><a href={data != null ? data.html_url : ''}>GitHub</a> updated at {data != null ? data.updated_at : null}</div>
        </SectionBody>
        <Footer>&copy; {new Date().getFullYear()} kawahara</Footer>
    </>
}

export default IndexPage

const Img = styled.img`
    border-radius: 50%;
    width: 70px;
`

const Header = styled.header`
    // position: fixed;
    padding: 16px;
    font-size: 16px;
    line-height: 1.5;
    background-color: #2d333b;
    // background-color: #22272e;
    color: #cdd9e5;
    display: flex;
    justify-content: space-between;
`

const Footer = styled.footer`
    padding: 15px;
    line-height: 1.5;
    font-size: 16px;
    background-color: #2d333b;
    color: #cdd9e5;
`

const SectionBody = styled.div`
    margin: 25% 0%;
    text-align: center;
`