import React from "react"
import { getBio, getLinkByTwitterId, getLinksByCompany } from "../lib/ghUtil";
import { Img } from "../lib/styles";


const BioIndex = ({ data }: any) => {
    const {
        name,
        avatar_url,
        bio,
        followers,
        following,
        public_repos,
        public_gists,
        html_url,
        created_at,
        updated_at,
        company,
        twitter_username
    } = data

    return <>
        <h2>{name}</h2>
        <div><Img src={avatar_url} /></div>
        <div>{getBio(bio, html_url)}</div>
        <div>2017.4 - 2021.3 東京電機大理工学部</div>
        <div>2021.4 - ランサーズ株式会社</div>
        <div>followers: {followers} following: {following}</div>
        <div>公開リポジトリ数: {public_repos} 公開 gist 数: {public_gists}</div>
        <div>所属: {getLinksByCompany(company)}</div>
        <div>Twitter: {getLinkByTwitterId(twitter_username)}</div>
        <div><a href={data ? html_url : ''}>GitHub</a> created at {created_at}</div>
        <div><a href={data ? html_url : ''}>GitHub</a> updated at {updated_at}</div>
    </>
}

export default BioIndex