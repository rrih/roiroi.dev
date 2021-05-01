import React from "react"
import { GithubBio } from "../interface/githubBio";
import { getBio, getGithubProp, getLinkByTwitterId, getLinksByCompany } from "./ghUtil";
import { Img } from "./styles";

const BioIndex = ({data}) => {
    return <>
        <h2>{getGithubProp('name', data)}</h2>
        <div><Img src={getGithubProp('avatar_url', data)} /></div>
        <div>{getBio(data)}</div>
        <div>2017.4 - 2021.3 東京電機大理工学部</div>
        <div>2021.4 - ランサーズ株式会社</div>
        <div>followers: {getGithubProp('followers', data)} following: {getGithubProp('following', data)}</div>
        <div>公開リポジトリ数: {getGithubProp('public_repos', data)} 公開 gist 数: {getGithubProp('public_gists', data)}</div>
        <div>所属: {getLinksByCompany(data)}</div>
        <div>Twitter: {getLinkByTwitterId(data)}</div>
        <div><a href={data ? getGithubProp('html_url', data) : ''}>GitHub</a> created at {getGithubProp('created_at', data)}</div>
        <div><a href={data ? getGithubProp('html_url', data) : ''}>GitHub</a> updated at {getGithubProp('updated_at', data)}</div>
    </>
}

export default BioIndex