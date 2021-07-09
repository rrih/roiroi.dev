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
        <h2>職歴</h2>
        <div>2021.4 - <a href="https://www.lancers.co.jp/">ランサーズ株式会社</a></div>
        <h2>学歴</h2>
        <div>2017.4 - 2021.3 <a href="https://www.dendai.ac.jp/about/undergraduate/rikougaku/rd/">東京電機大学（理工学部、情報システムデザイン学系）</a></div>
        <h2>その他</h2>
        <div>followers: {followers} following: {following}</div>
        <div>public repos: {public_repos} public gists: {public_gists}</div>
        <div>belongs: {getLinksByCompany(company)}</div>
        <div><a href={data ? html_url : ''}>GitHub</a> created at {created_at}</div>
        <div><a href={data ? html_url : ''}>GitHub</a> updated at {updated_at}</div>
        <h2>SNS等</h2>
        <div>Twitter: {getLinkByTwitterId(twitter_username)}</div>
        <div>Instagram: <a href="https://instagram.com/rrih_dev">@rrih_dev</a></div>
        <div>Facebook: <a href="https://facebook.com/rsklv">@rsklv</a></div>
        <div>Wantedly: <a href="https://wantedly.com/id/rrih">@rrih</a></div>
        <div>Lancers: <a href="https://www.lancers.jp/profile/kawahara_ryohei">kawahara_ryohei</a></div>
        <div>Qiita: <a href="https://qiita.com/rrih">@rrih</a></div>
        <div>Zenn: <a href="https://zenn.dev/ro">@ro</a></div>
        <div>LAPRAS: <a href="https://lapras.com/public/Q3HIOW6">Q3HIOW6</a></div>
        <div>YOUTRUST: <a href="https://youtrust.jp/users/rrih">rrih</a></div>
        <h2>ほしいものリスト</h2>
        <div>wish list: <a href="https://www.amazon.co.jp/hz/wishlist/genericItemsPage/1PVT09ZQ3TIQN">here</a></div>
    </>
}

export default BioIndex