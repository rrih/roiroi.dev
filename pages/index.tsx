import React, { useEffect, useState } from "react"
import axios from "axios";
import { Footer, Header, Img, SectionBody } from "./styles";
import { GithubBio } from "../interface/githubBio";
import { getBio, getGithubProp, getLinkByTwitterId, getLinksByCompany } from "./ghUtil";
import BioIndex from "./bio";

const IndexPage = () => {
    const [data, setData] = useState<GithubBio>();

    useEffect(() => {
        axios.get('https://api.github.com/users/rrih')
            .then((e) => {
                const resData: GithubBio = e.data
                console.log(resData)
                setData(resData)
                // console.log(data)
            })
            .catch((e) => {
                console.log(e)
            })
            .finally(() => {
                // console.log(data)
            })
    }, [])

    return <>
        <Header>
            <div>roiroi.dev</div>
        </Header>
        <SectionBody>
            {data != null ? <BioIndex data={data} /> : null}
            {/* <h2>{getGithubProp('name', data)}</h2>
            <div><Img src={getGithubProp('avatar_url', data)} /></div>
            <div>{getBio(data)}</div>
            <div>2017.4 - 2021.3 東京電機大理工学部</div>
            <div>2021.4 - ランサーズ株式会社</div>
            <div>followers: {getGithubProp('followers', data)} following: {getGithubProp('following', data)}</div>
            <div>公開リポジトリ数: {getGithubProp('public_repos', data)} 公開 gist 数: {getGithubProp('public_gists', data)}</div>
            <div>所属: {getLinksByCompany(data)}</div>
            <div>Twitter: {getLinkByTwitterId(data)}</div>
            <div><a href={getGithubProp('html_url', data)}>GitHub</a> created at {getGithubProp('created_at', data)}</div>
            <div><a href={getGithubProp('html_url', data)}>GitHub</a> updated at {getGithubProp('updated_at', data)}</div> */}
        </SectionBody>
        <Footer>&copy; {new Date().getFullYear()} kawahara</Footer>
    </>
}

export default IndexPage