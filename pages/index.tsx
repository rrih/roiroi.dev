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
    }, [])

    /**
     * nullable ではない場合、data から指定したプロパティを取り出す。
     *
     * @param propName string
     * @return string
     */
    const getGithubProp = (propName: string): string => {
        return data ? data[propName] : '';
    }

    /**
     * 所属のリンクを取得
     *
     * @param void
     * @return JSX.Element
     */
    const getLinksByCompany = (): JSX.Element => {
        const onlyName: string = data ? data['company'].split('@')[1] : ''
        return  <a href={`https://github.com/${onlyName}`}>{getGithubProp('company')}</a>
    }

    /**
     * GitHub の Twitter screen name からリンクを取得
     */
    const getLinkByTwitterId = (): JSX.Element => {
        const twitterUsername = data ? data['twitter_username'] : ''
        return <a href={`https://twitter.com/${twitterUsername}`}>@{twitterUsername}</a>
    }

    /**
     * bio の中に screen name がある場合、link の dom に差し替える
     *
     * @param void
     * @return JSX.Element | string | null
     */
    const getBio = (): JSX.Element | string | null => {
        if (data == null) {
            return null
        }
        const bio: string = data.bio
        if (bio.indexOf('@rrih') != -1) {
            const first = bio.split('@rrih')[0]
            const second = bio.split('@rrih')[1]
            const dom: JSX.Element = <>{first}<a href={getGithubProp('html_url')}>@rrih</a>{second}</>
            return dom
        }
        return bio
    }

    return <>
        <Header>
            <div>roiroi.dev</div>
        </Header>
        <SectionBody>
            <h2>{getGithubProp('name')}</h2>
            <div><Img src={getGithubProp('avatar_url')} /></div>
            <div>{getBio()}</div>
            <div>1997.9 から生きてます</div>
            人生おしまいです…
            <div>2017.4 - 2021.3 某大理工学部</div>
            <div>2020.9 - 2021.3 某社(part-time)</div>
            <div>2021.4 - 某社(full-time)</div>
            <div>followers: {getGithubProp('followers')} following: {getGithubProp('following')}</div>
            <div>公開リポジトリ数: {getGithubProp('public_repos')} 公開 gist 数: {getGithubProp('public_gists')}</div>
            <div>所属: {getLinksByCompany()}</div>
            <div>Twitter: {getLinkByTwitterId()}</div>
            <div><a href={getGithubProp('html_url')}>GitHub</a> created at {getGithubProp('created_at')}</div>
            <div><a href={getGithubProp('html_url')}>GitHub</a> updated at {getGithubProp('updated_at')}</div>
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
    // text-align: center;
    margin-left: 15px;
`